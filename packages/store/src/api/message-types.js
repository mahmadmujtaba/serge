import uniqid from 'uniqid'
import PouchDB from 'pouchdb'

import { databasePath, MSG_TYPE_STORE } from '@serge/config'

import {
  machineryFailure, 
  weatherForecast,
  chat,
  message,
  rfi,
  rfs,
  link,
  dailyIntentions,
  pg19WeeklyOrders,
  stateofworld } from '../schemas'

var db = new PouchDB(databasePath + MSG_TYPE_STORE)

export const populateDb = () => {
  const promises = []

  return new Promise((resolve, reject) => {
    db.allDocs().then(entries => {
      if (entries.rows.length === 0) {
        var machine = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Machinery failure',
          details: machineryFailure,
          completed: false
        }

        promises.push(db.put(machine))

        var weather = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Weather forecast',
          details: weatherForecast,
          completed: false
        }

        promises.push(db.put(weather))

        var messageInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Message',
          details: message,
          completed: false
        }
        promises.push(db.put(messageInput))

        var rfiInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Request for Information',
          details: rfi,
          completed: false
        }
        promises.push(db.put(rfiInput))

        var rfsInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Request for Support',
          details: rfs,
          completed: false
        }
        promises.push(db.put(rfsInput))

        var chatInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Chat',
          details: chat,
          completed: false
        }

        promises.push(db.put(chatInput))

        var linkInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Link',
          details: link,
          completed: false
        }

        promises.push(db.put(linkInput))

        var dailyInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'Daily intentions',
          details: dailyIntentions,
          completed: false
        }

        promises.push(db.put(dailyInput))

        var pg19WeeklyInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'PG19 Weekly Orders',
          details: pg19WeeklyOrders,
          completed: false
        }

        promises.push(db.put(pg19WeeklyInput))

        var sowInput = {
          _id: uniqid.time(),
          lastUpdated: new Date().toISOString(),
          title: 'State of World',
          details: stateofworld,
          completed: false
        }
        promises.push(db.put(sowInput))

        Promise.all(promises).then(() => {
          resolve(true)
        })
      } else {
        resolve(false)
      }
    })
  })
}

export const postNewMessage = (schema) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const allMessages = await getAllMessagesFromDb()

      const matchedName = allMessages.find((messageType) => messageType.title.toLowerCase() === schema.title.toLowerCase())

      if (matchedName) {
        reject('Message title already used')
        return
      }

      const time = new Date().toISOString()

      var schemaObj = {
        _id: time,
        lastUpdated: time,
        title: schema.title,
        details: schema,
        completed: false
      }

      return db.put(schemaObj)
        .then(function (result) {
          resolve(result)
        })
        .catch(function (err) {
          console.log(err)
          reject(false)
        })
    })()
  })
}

export const duplicateMessageInDb = (id) => {
  const time = new Date().toISOString()

  return new Promise((resolve, reject) => {
    db.get(id)
      .then(function (doc) {
        // var updatedMessage = doc.details;

        doc.details.title = `${doc.details.title} Copy-${uniqid.time()}`

        return db.put({
          _id: time,
          lastUpdated: time,
          title: doc.details.title,
          details: doc.details
        })
      })
      .then(function () {
        resolve(true)
      })
      .catch(function (err) {
        console.log(err)
        reject(false)
      })
  })
}

export const updateMessageInDb = (schema, id) => {
  return new Promise((resolve, reject) => {
    (async () => {
      const allMessages = await getAllMessagesFromDb()

      const matchedName = allMessages.find((messageType) => messageType.title.toLowerCase() === schema.title.toLowerCase())

      if (matchedName) {
        reject('Message title already used')
        return
      }

      db.get(id)
        .then(function (doc) {
          return db.put({
            _id: doc._id,
            lastUpdated: new Date().toISOString(),
            _rev: doc._rev,
            title: schema.title,
            details: schema
          })
        })
        .then(function (result) {
          resolve(result)
        })
        .catch(function (err) {
          console.log(err)
          reject(false)
        })
    })()
  })
}

export const deleteMessageFromDb = (id) => {
  return new Promise((resolve, reject) => {
    db.get(id)
      .then(function (doc) {
        return db.remove(doc)
      })
      .then(function (result) {
        resolve(result)
      })
      .catch(function (err) {
        console.log(err)
        reject(false)
      })
  })
}

export const getAllMessagesFromDb = () => {
  return new Promise((resolve, reject) => {
    db.allDocs({ include_docs: true, descending: true })
      .then((res) => {
        resolve(res.rows.map((a) => a.doc))
      })
      .catch((err) => {
        reject(err)
      })
  })
}