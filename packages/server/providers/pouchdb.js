const listeners = {}
let addListenersQueue = []

const { wargameSettings, COUNTER_MESSAGE, dbSuffix, settings } = require('../consts')

const pouchDb = (app, io, pouchOptions) => {
  const PouchDB = require('pouchdb-core')
    .plugin(require('pouchdb-adapter-node-websql'))
    .plugin(require('pouchdb-adapter-http'))
    .plugin(require('pouchdb-mapreduce'))
    .plugin(require('pouchdb-replication'))
    .defaults(pouchOptions)
  require('pouchdb-all-dbs')(PouchDB)

  app.use('/db', require('express-pouchdb')(PouchDB))

  // changesListener
  const initChangesListener = (dbName) => {
    const db = new PouchDB(dbName, pouchOptions)
    // saving listener
    listeners[dbName] = db.changes({
      since: 'now',
      live: true,
      timeout: false,
      heartbeat: false,
      include_docs: true
    }).on('change', (result) => io.emit('changes', result.doc))
  }

  // check listeners queue to add a new listenr
  setInterval(() => {
    if (addListenersQueue.length) {
      for (const dbName of addListenersQueue) {
        initChangesListener(dbName)
      }
      // clean queue
      addListenersQueue = []
    }
  }, 5000)

  PouchDB.allDbs().then(dbs => {
    dbs.forEach(db => initChangesListener(db))
  }).catch(err => console.log('Error on load alldbs', err))

  const checkSqliteExists = (dbName) => {
    return dbName.indexOf('wargame') !== -1 && dbName.indexOf(dbSuffix) === -1 ? dbName + dbSuffix : dbName
  }

  app.put('/:wargame', async (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)
    const db = new PouchDB(databaseName, pouchOptions)
    const putData = req.body

    if (!listeners[databaseName]) {
      addListenersQueue.push(databaseName)
    }

    const retryUntilWritten = (db, doc) => {
      return db.get(doc._id).then((origDoc) => {
        doc._rev = origDoc._rev
        return db.put(doc).then(async () => {
          await db.compact()
          res.send({ msg: 'Updated', data: doc })
        })
      }).catch(err => {
        if (err.status === 409) {
          return retryUntilWritten(db, doc)
        } else { // new doc
          return db.put(doc)
            .then(() => res.send({ msg: 'Saved', data: doc }))
            .catch(() => {
              const settingsDoc = {
                ...doc,
                _id: settings
              }
              return retryUntilWritten(db, settingsDoc)
            })
        }
      })
    }
    retryUntilWritten(db, putData)
  })

  app.get('/replicate/:replicate/:dbname', (req, res) => {
    const newDbName = checkSqliteExists(req.params.replicate) // new db name
    const newDb = new PouchDB(newDbName, pouchOptions)
    const existingDatabase = checkSqliteExists(req.params.dbname) // copy data from
    newDb.replicate.from(existingDatabase).then(() => {
      res.send('Replicated')
    }).catch(err => res.status(400).send({ msg: 'Error on replication', data: err }))
  })

  app.delete('/delete/:dbName', (req, res) => {
    const dbName = checkSqliteExists(req.params.dbName)
    const db = new PouchDB(dbName, pouchOptions)
    db.destroy().then(() => {
      res.send({ msg: 'ok', data: dbName })
    }).catch((err) => res.status(400).send({ msg: 'error', data: err }))
  })

  app.delete('/clearAll', (req, res) => {
    PouchDB.resetAllDbs()
      .then(() => res.send())
      .catch(err => res.status(500).send(`Error on clearAll ${err}`))
  })

  // get all wargame names
  app.get('/allDbs', async (req, res) => {
    PouchDB.allDbs().then(dbs => {
      const dbList = dbs.map(dbName => dbName.replace(dbSuffix, ''))
      res.send({ msg: 'ok', data: dbList || [] })
    }).catch(() => res.send([]))
  })

  // get all documents for wargame
  app.get('/:wargame', async (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)

    if (!databaseName) {
      res.status(404).send({ msg: 'Wrong Wargame Name', data: null })
    }

    const db = new PouchDB(databaseName, pouchOptions)

    db.allDocs({ include_docs: true, attachments: true })
      .then(result => {
        const messages = result.rows.reduce((messages, { doc }) => {
          const isNotSystem = doc._id !== wargameSettings && doc._id !== settings
          if (doc.messageType !== COUNTER_MESSAGE && isNotSystem) messages.push(doc)
          return messages
        }, [])
        res.send({ msg: 'ok', data: messages })
      }).catch(() => res.send([]))
  })

  // get document for wargame
  app.get('/get/:wargame/:id', (req, res) => {
    const databaseName = checkSqliteExists(req.params.wargame)
    const db = new PouchDB(databaseName, pouchOptions)
    const id = `${req.params.id}`

    if (!id || !databaseName) {
      res.status(404).send({ msg: 'Wrong Id or Wargame', data: null })
    }

    db.get(id)
      .then(data => res.send({ msg: 'ok', data: data }))
      .catch(() => {
        db.get(settings)
          .then(data => res.send({ msg: 'ok', data: data }))
          .catch((err) => res.send({ msg: 'err', data: err }))
      })
  })
}

module.exports = pouchDb
