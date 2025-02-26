import { Wargame } from "@serge/custom-types";

const wargame: Wargame = {
    "adjudicationStartTime": "2021-08-10T16:12:25+01:00",
    "wargameList": [],
    "data": {
        "channels": {
            "channels": [
                {
                    "name": "VHF C16",
                    "channelType": "ChannelCustom",
                    "participants": [
                        {
                            "force": "White",
                            "forceUniqid": "umpire",
                            "roles": [],
                            "subscriptionId": "8qsze9",
                            "templates": [],
                            "pType": "ParticipantCustom"
                        },
                        {
                            "force": "CTF B",
                            "forceUniqid": "Blue-1",
                            "roles": [],
                            "subscriptionId": "hzrzp",
                            "templates": [],
                            "pType": "ParticipantCustom"
                        },
                        {
                            "force": "CTF Y",
                            "forceUniqid": "Red-1",
                            "roles": [],
                            "subscriptionId": "icrx",
                            "templates": [],
                            "pType": "ParticipantCustom"
                        }
                    ],
                    "uniqid": "channel-koirdijk"
                },
                {
                    "name": "mapping",
                    "channelType": "mapping",
                    "participants": [
                        {
                            "force": "White",
                            "pType": "ParticipantMapping",
                            "forceUniqid": "umpire",
                            "roles": [],
                            "subscriptionId": "white-view"
                        },
                        {
                            "force": "White",
                            "pType": "ParticipantMapping",
                            "forceUniqid": "umpire",
                            "roles": ["umpire-GC"],
                            "controls": ["control-all:green-force"],
                            "subscriptionId": "white-control-green-all"
                        },
                        {
                            "force": "White",
                            "pType": "ParticipantMapping",
                            "forceUniqid": "umpire",
                            "roles": ["umpire-blue-hq"],
                            "controls": ["merchID2"],
                            "subscriptionId": "white-control-green-asset"
                        },
                        {
                            "force": "CTF B",
                            "forceUniqid": "Blue-1",
                            "roles": [],
                            "subscriptionId": "w9lmf",
                            "pType": "ParticipantMapping"
                        },
                        {
                            "force": "CTF B",
                            "forceUniqid": "Blue-1",
                            "roles": ["nortCO"],
                            "subscriptionId": "nortCO-control",
                            "pType": "ParticipantMapping",
                            "controls": ["nortID"]
                        },
                        {
                            "force": "CTF B",
                            "forceUniqid": "Blue-1",
                            "roles": ["blueCO"],
                            "subscriptionId": "blue-CO-control-all",
                            "pType": "ParticipantMapping",
                            "controls": ["control-all:Blue-1"]
                        },
                        {
                            "force": "CTF Y",
                            "forceUniqid": "Red-1",
                            "roles": ["red-CO"],
                            "subscriptionId": "red-co-all",
                            "controls": ["control-all:Red-1"],
                            "pType": "ParticipantMapping"
                        },
                        {
                            "force": "CTF Y",
                            "forceUniqid": "Red-1",
                            "roles": [],
                            "subscriptionId": "red-viewers",
                            "pType": "ParticipantMapping"
                        }
                    ],
                    "uniqid": "channel-koirldxk"
                }
            ],
            "dirty": false,
            "name": "Channels",
            "selectedChannel": ""
        },
        "forces": {
            "dirty": false,
            "forces": [
                {
                    "color": "#FCFBEE",
                    "dirty": false,
                    "iconURL": "http://localhost:8080/default_img/umpireDefault.png",
                    "name": "White Force",
                    "overview": "Umpire force.",
                    "roles": [
                        {
                            "isGameControl": true,
                            "isInsightViewer": true,
                            "isObserver": true,
                            "isRFIManager": false,
                            "name": "Game Control",
                            "roleId": "umpire-GC"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": true,
                            "isObserver": false,
                            "isRFIManager": true,
                            "name": "RFI Mgr",
                            "roleId": "rks5zfzd3"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Blue HHQ",
                            "roleId": "umpire-blue-hq"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Red HHQ",
                            "roleId": "rks5zfzd5"
                        }
                    ],
                    "umpire": true,
                    "uniqid": "umpire"
                },
                {
                    "assets": [
                        {
                            "condition": "Working",
                            "contactId": "C426",
                            "history": [
                                {
                                    "route": [
                                        "8918aab725bffff"
                                    ],
                                    "status": {
                                        "speedKts": 12,
                                        "state": "Transiting a"
                                    },
                                    "turn": 1
                                }, {
                                    "status": {
                                        "state": "Moored"
                                    },
                                    "turn": 2
                                }, {
                                    "route": [
                                        "8918aab7203ffff"
                                    ],
                                    "status": {
                                        "speedKts": 12,
                                        "state": "Transiting b"
                                    },
                                    "turn": 2
                                }
                            ],
                            "hosting": [
                                {
                                    "condition": "Full capability",
                                    "contactId": "C572",
                                    "history": [],
                                    "name": "Merlin",
                                    "perceptions": [
                                        {
                                            "by": "Red-1",
                                            "force": "Blue-1",
                                            "typeId": "a8"
                                        }
                                    ],
                                    "plannedTurns": [],
                                    "platformType": "helicopter",
                                    "platformTypeId": "a8",
                                    "status": {
                                        "state": "Landed"
                                    },
                                    "uniqid": "nort-merlin"
                                },
                                {
                                    "condition": "Full capability",
                                    "contactId": "C591",
                                    "history": [],
                                    "name": "Dart 42",
                                    "perceptions": [],
                                    "plannedTurns": [],
                                    "platformType": "Unmanned-Airborne-Vehicle",
                                    "platformTypeId": "a10",
                                    "status": {
                                        "state": "Landed"
                                    },
                                    "uniqid": "nort-dart"
                                }
                            ],
                            "locationPending": false,
                            "name": "NORT",
                            "perceptions": [
                                {
                                    "by": "Red-1",
                                    "force": "Blue-1",
                                    "typeId": "a4"
                                }
                            ],
                            "plannedTurns": [
                                {
                                    "route": [
                                        "8918a84db3bffff"
                                    ],
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "turn": 1
                                },
                                {
                                    "status": {
                                        "state": "Moored"
                                    },
                                    "turn": 2
                                }

                            ],
                            "platformTypeId": "a6",
                            "attributeValues": [
                                {
                                    "attrId": "asdic-dir",
                                    "attrType": "AttributeValueNumber",
                                    "value": 150
                                },
                                {
                                    "attrId": "att-torpedoes",
                                    "value": 25,
                                    "attrType": "AttributeValueNumber"
                                }
                            ],
                            "position": "8918aab7003ffff",
                            "uniqid": "nortID"
                        },
                        {
                            "condition": "Working",
                            "contactId": "C164",
                            "history": [{
                                "route": [
                                    "8918aab604bffff"
                                ],
                                "status": {
                                    "speedKts": 6,
                                    "state": "Transiting"
                                },
                                "turn": 1
                            }, {
                                "status": {
                                    "state": "Moored"
                                },
                                "turn": 2
                            }, {
                                "route": [
                                    "8918aab6283ffff"
                                ],
                                "status": {
                                    "speedKts": 12,
                                    "state": "Transiting"
                                },
                                "turn": 3
                            }],
                            "locationPending": true,
                            "name": "TALN",
                            "attributeValues": [
                                {
                                    "attrId": "comm-battery",
                                    "value": 100,
                                    "attrType": "AttributeValueNumber"
                                }
                            ],
                            "perceptions": [
                                {
                                    "by": "Red-1",
                                    "force": "Blue-1",
                                    "name": "Blue Warship",
                                    "typeId": "a3"
                                },
                                {
                                    "by": "Red-2",
                                    "force": "Blue-1",
                                    "typeId": "a4"
                                }
                            ],
                            "platformTypeId": "a8",
                            "position": "8918aab7547ffff",
                            "uniqid": "talnID"
                        },
                        {
                            "condition": "Working",
                            "contactId": "C866",
                            "history": [
                                {
                                    "route": [
                                        "8918aab648bffff"
                                    ],
                                    "status": {
                                        "speedKts": 12,
                                        "state": "Transiting a"
                                    },
                                    "turn": 1
                                },
                                {
                                    "route": [
                                        "8918aab6447ffff"
                                    ],
                                    "status": {
                                        "speedKts": 10,
                                        "state": "Transiting b"
                                    },
                                    "turn": 2
                                }
                            ],
                            "locationPending": true,
                            "name": "SSN-2",
                            "perceptions": [],
                            "platformTypeId": "a8",
                            "position": "8918aab66bbffff",
                            "uniqid": "a0a975y4221"
                        }, {
                            "condition": "Full capability",
                            "contactId": "C713",
                            "history": [
                                {
                                    "route": [
                                        "8918aab0c2fffff"
                                    ],
                                    "status": {
                                        "speedKts": 10,
                                        "state": "Transiting"
                                    },
                                    "turn": 0
                                },
                                {
                                    "route": [
                                        "8918aab08b3ffff"
                                    ],
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "turn": 1
                                },
                                {
                                    "route": [
                                        "8918aab0d63ffff"
                                    ],
                                    "status": {
                                        "speedKts": 30,
                                        "state": "Transiting"
                                    },
                                    "turn": 2
                                }
                            ],
                            "comprising": [
                                {
                                    "condition": "Full capability",
                                    "contactId": "C964",
                                    "history": [],
                                    "name": "Frigate A",
                                    "perceptions": [
                                        {
                                            "by": "Red-1",
                                            "force": "Blue-1",
                                            "name": "Frigate A Perceived Name",
                                            "typeId": "a3"
                                        }
                                    ],
                                    "platformType": "frigate",
                                    "platformTypeId": "a3",
                                    "hosting": [
                                        {
                                            "condition": "Full capability",
                                            "contactId": "C721",
                                            "history": [],
                                            "name": "Dart 45",
                                            "perceptions": [
                                                {
                                                    "by": "Red-1",
                                                    "force": "Blue-1",
                                                    "name": "Unknown UAV",
                                                    "typeId": "a10"
                                                }
                                            ],
                                            "plannedTurns": [],
                                            "platformType": "Unmanned-Airborne-Vehicle",
                                            "platformTypeId": "a10",
                                            "status": {
                                                "state": "Landed"
                                            },
                                            "uniqid": "tg-frig-uav1"
                                        },
                                        {
                                            "condition": "Full capability",
                                            "contactId": "C932",
                                            "history": [],
                                            "name": "Dart 46",
                                            "perceptions": [],
                                            "plannedTurns": [],
                                            "platformType": "Unmanned-Airborne-Vehicle",
                                            "platformTypeId": "a10",
                                            "status": {
                                                "state": "Landed"
                                            },
                                            "uniqid": "a0pra17943"
                                        }
                                    ],
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "uniqid": "tg-frigate"
                                },
                                {
                                    "condition": "Full capability",
                                    "contactId": "C653",
                                    "history": [],
                                    "name": "MCM Delta",
                                    "perceptions": [
                                        { "by": "Red-1", "force": "Blue-1", "name": "Blue MCM", "typeId": "a9" }
                                    ],
                                    "platformType": "MCMV",
                                    "platformTypeId": "a9",
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "uniqid": "tg-mcm"
                                }
                            ],
                            "name": "CTF 511",
                            "perceptions": [
                                {
                                    "by": "Red",
                                    "force": "Blue-1",
                                    "name": "BRIT",
                                    "typeId": "a11"
                                }
                            ],
                            "plannedTurns": [
                                {
                                    "route": [
                                        "8918aab0dafffff",
                                        "8918aab0db7ffff"
                                    ],
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "turn": 4
                                },
                                {
                                    "route": [
                                        "8918aab766fffff"
                                    ],
                                    "status": {
                                        "speedKts": 20,
                                        "state": "Transiting"
                                    },
                                    "turn": 5
                                }
                            ],
                            "platformType": "task-group",
                            "platformTypeId": "a16",
                            "position": "8918aab0d07ffff",
                            "status": {
                                "speedKts": 20,
                                "state": "Transiting"
                            },
                            "uniqid": "a0pra5431"
                        }
                    ],
                    "color": "#00aaff",
                    "cssClass": "blue-1",
                    "dirty": false,
                    "iconURL": "http://localhost:8080/default_img/forceDefault.png",
                    "name": "Blue-1 Force",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "CO",
                            "roleId": "blueCO"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "NORT CO",
                            "roleId": "nortCO"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "Comms",
                            "roleId": "blue-comms"
                        }

                    ],
                    "umpire": false,
                    "uniqid": "Blue-1",
                    "visibleTo": []
                },
                {
                    "assets": [
                        {
                            "condition": "Working",
                            "contactId": "C122",
                            "history": [{
                                "status": {
                                    "state": "Moored 1"
                                },
                                "turn": 1
                            },
                            {
                                "status": {
                                    "state": "Scanning 1"
                                },
                                "turn": 2
                            }],
                            "locationPending": true,
                            "name": "AGI",
                            "perceptions": [
                                {
                                    "by": "Blue-1",
                                    "force": "Red-1"
                                },
                                {
                                    "by": "Blue-2",
                                    "force": "Red-1"
                                }
                            ],
                            "plannedTurns": [
                                {
                                    "route": [
                                        "8918a84db47ffff"
                                    ],
                                    "status": {
                                        "speedKts": 12,
                                        "state": "Transiting a"
                                    },
                                    "turn": 3
                                }, {
                                    "status": {
                                        "state": "Moored"
                                    },
                                    "turn": 4
                                }],
                            "platformType": "agi",
                            "platformTypeId": "a15",
                            "position": "8918a84db3bffff",
                            "uniqid": "red-AGI"
                        },
                        {
                            "condition": "Working",
                            "contactId": "C442",
                            "history": [{
                                "status": {
                                    "state": "Landed"
                                },
                                "turn": 1
                            }, {
                                "status": {
                                    "state": "Refueling"
                                },
                                "turn": 2
                            }],
                            "locationPending": true,
                            "name": "MPA 2",
                            "perceptions": [
                                {
                                    "by": "Blue-1",
                                    "force": "Red-1",
                                    "typeId": "a12"
                                },
                                {
                                    "by": "Blue-2",
                                    "force": "Red-1"
                                }
                            ],
                            "plannedTurns": [
                                {
                                    "status": {
                                        "state": "Landed"
                                    },
                                    "turn": 2
                                }

                            ], "platformTypeId": "a11",
                            "position": "8918a84db33ffff",
                            "uniqid": "red-mpa-2"
                        }
                    ],
                    "color": "#f00",
                    "cssClass": "red-1",
                    "dirty": false,
                    "iconURL": "http://localhost:8080/default_img/forceDefault.png",
                    "name": "Red-1 Force",
                    "overview": "An overview written here..",
                    "roles": [
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "name": "CO",
                            "roleId": "red-CO"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y1",
                            "roleId": "rks5zfzdj"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y2",
                            "roleId": "rks5zfzdk"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y3",
                            "roleId": "rks5zfzdl"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y4",
                            "roleId": "rks5zfzdm"
                        },
                        {
                            "isGameControl": false,
                            "isInsightViewer": false,
                            "isObserver": false,
                            "isRFIManager": false,
                            "name": "CTF Y5",
                            "roleId": "rks5zfzdn"
                        }
                    ],
                    "umpire": false,
                    "uniqid": "Red-1",
                    "visibleTo": []
                },
                {
                    "color": "#0d0",
                    "assets": [
                        {
                            "condition": "Working",
                            "contactId": "C526",
                            "history": [],
                            "locationPending": true,
                            "name": "MERCH 1",
                            "perceptions": [],
                            "plannedTurns": [],
                            "platformTypeId": "a13",
                            "attributeValues": [],
                            "position": "8918a84d94fffff",
                            "uniqid": "merchID"
                        },
                        {
                            "condition": "Working",
                            "contactId": "C926",
                            "history": [],
                            "locationPending": true,
                            "name": "MERCH 2",
                            "perceptions": [],
                            "plannedTurns": [],
                            "platformTypeId": "a13",
                            "attributeValues": [],
                            "position": "8918aab6623ffff",
                            "uniqid": "merchID2"
                        }
                    ],
                    "dirty": false,
                    "iconURL": "http://localhost:8080/default_img/umpireDefault.png",
                    "name": "Green Force",
                    "overview": "Green force.",
                    "roles": [],
                    "umpire": false,
                    "uniqid": "green-force"
                }
            ],
            "name": "Forces",
            "selectedForce": ""
        },
        "overview": {
            "dirty": false,
            "gameDate": "2021-05-13T16:12",
            "gameDescription": "",
            "gameTurnTime": {
                "millis": 240000,
                "unit": "millis"
            },
            "mapConstraints": {
                "bounds": [[50.26, -19.6], [50.21, -19.40]],
                "cellLabelsStyle": "x_y_labels",
                "gridCellsURL": "cells/atlantic-cells-6k.json",
                "h3res": 9,
                "maxNativeZoom": 7,
                "maxZoom": 16,
                "minZoom": 5,
                "polygonAreasURL": "cells/atlantic-polygons.json",
                "tileLayer": {
                    "attribution": "Generated by QTiles",
                    "url": "./atlantic_tiles/{z}/{x}/{y}.png"
                }
            },
            "name": "Overview - settings",
            "realtimeTurnTime": 300000,
            "showAccessCodes": true,
            "timeWarning": 60000,
            "turnPresentation": "Turn-Pairs"
        },
        "platformTypes": {
            "dirty": false,
            "name": "Platform Types",
            "platformTypes": [
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "frigate.svg",
                    "name": "frigate",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Mixed"
                        },
                        {
                            "mobile": true,
                            "name": "Active"
                        },
                        {
                            "mobile": true,
                            "name": "Passive"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a1"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "frigate-ta.svg",
                    "name": "frigate-ta",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Mixed"
                        },
                        {
                            "mobile": true,
                            "name": "Active"
                        },
                        {
                            "mobile": true,
                            "name": "Passive"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a2"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "missile.svg",
                    "name": "Missile",
                    "states": [
                        {
                            "mobile": false,
                            "name": "Inactive"
                        },
                        {
                            "mobile": true,
                            "name": "Deployed"
                        }
                    ],
                    "travelMode": "air",
                    "uniqid": "a3"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "carrier.svg",
                    "name": "Carrier",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24,
                        30
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Air Ops"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a4"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "auxiliary.svg",
                    "name": "Auxiliary",
                    "speedKts": [
                        6,
                        12
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Supporting"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a5"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "destroyer.svg",
                    "orientation": [{
                        "attribute": "asdic-dir",
                        "origin": "absolute"
                    }, {}],
                    "name": "Destroyer",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24,
                        30,
                        36
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": false,
                            "name": "Loitering"
                        }
                    ],
                    "turningCircle": 500,
                    "attributeTypes": [
                        {
                            "name": "ASDIC",
                            "attrId": "asdic-dir",
                            "description": "ASDIC orientation (absolute)",
                            "defaultValue": 0,
                            "editableByPlayer": true,
                            "attrType": "AttributeTypeNumber"
                        },
                        {
                            "name": "Torpedoes",
                            "attrId": "att-torpedoes",
                            "description": "Number of torpedoes remaining",
                            "defaultValue": 20,
                            "editableByPlayer": false,
                            "attrType": "AttributeTypeNumber"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a6"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "ssk.svg",
                    "name": "SSK",
                    "speedKts": [
                        6,
                        12,
                        18
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Aggressove"
                        },
                        {
                            "mobile": true,
                            "name": "Evasive"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a7"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "ssn.svg",
                    "name": "SSN",
                    "orientation": [{
                    }],
                    "attributeTypes": [
                        {
                            "name": "Battery Level",
                            "units": "%",
                            "description": "Charge remaining",
                            "attrId": "comm-battery",
                            "defaultValue": 100,
                            "editableByPlayer": false,
                            "attrType": "AttributeTypeNumber"
                        }
                    ],
                    "speedKts": [
                        6,
                        12,
                        18,
                        24
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": true,
                            "name": "Aggressove"
                        },
                        {
                            "mobile": true,
                            "name": "Evasive"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a8"
                },
                {
                    "conditions": [
                        "Clearing",
                        "Transiting",
                        "Inactive"
                    ],
                    "icon": "mvmv.svg",
                    "name": "MCMV",
                    "states": [
                        {
                            "mobile": true,
                            "name": "Active"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a9"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "helicopter.svg",
                    "name": "Helicopter",
                    "states": [
                        {
                            "mobile": true,
                            "name": "Active"
                        },
                        {
                            "mobile": false,
                            "name": "Landed"
                        }
                    ],
                    "travelMode": "air",
                    "uniqid": "a10"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "mpa.svg",
                    "name": "mpa",
                    "states": [
                        {
                            "mobile": true,
                            "name": "Active"
                        },
                        {
                            "mobile": false,
                            "name": "Landed"
                        }
                    ],
                    "travelMode": "air",
                    "uniqid": "a11"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "fixed-wing-aircraft.svg",
                    "name": "Fixed Wing Aircraft",
                    "states": [
                        {
                            "mobile": true,
                            "name": "Active"
                        },
                        {
                            "mobile": false,
                            "name": "Landed"
                        }
                    ],
                    "travelMode": "air",
                    "uniqid": "a12"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "merchant-vessel.svg",
                    "name": "Merchant vessel",
                    "speedKts": [
                        6,
                        12
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": false,
                            "name": "Moored"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a13"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "boghammer.svg",
                    "name": "Boghammer",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24,
                        30
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": false,
                            "name": "Moored"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a14"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "agi.svg",
                    "name": "AGI",
                    "speedKts": [
                        6,
                        12,
                        18
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": false,
                            "name": "Moored"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a15"
                },
                {
                    "conditions": [
                        "Working",
                        "Disabled",
                        "Mission Kill"
                    ],
                    "icon": "task-group.svg",
                    "name": "Task Group",
                    "speedKts": [
                        6,
                        12,
                        18,
                        24,
                        30
                    ],
                    "states": [
                        {
                            "mobile": true,
                            "name": "Transiting"
                        },
                        {
                            "mobile": false,
                            "name": "Stopped"
                        },
                        {
                            "mobile": false,
                            "name": "Moored"
                        }
                    ],
                    "travelMode": "sea",
                    "uniqid": "a16"
                }
            ],
            "selectedType": ""
        },
        "annotations": {
            "annotations": [{
                "uniqid": "marker-one",
                "color": "#f00",
                "description": "description for the annotation",
                "iconId": "unk",
                "label": "first marker",
                "shadeRadius": 2,
                "location": "8918aab76abffff",
                "visibleTo": ["Blue-1"]
            }, {
                "uniqid": "marker-two",
                "color": "#099",
                "description": "description for the second annotation",
                "iconId": "gen",
                "shadeRadius": 5,
                "label": "second marker",
                "location": "8918a84db3bffff",
                "visibleTo": ["Blue-1", "Red-1"]
            }, {
                "uniqid": "marker-three",
                "color": "#909",
                "description": "description for the third annotation",
                "iconId": "aud",
                "shadeRadius": 0,
                "label": "third marker",
                "location": "8918aab2b0bffff",
                "visibleTo": ["Red-1"]
            }]
        },
        "annotationIcons": {
            "markers": [{ "uniqid": "unk", "name": "Unknown", "icon": "marker_unknown.svg" },
            { "uniqid": "a/v", "name": "Audio-Visual", "icon": "marker_audio_visual.svg" },
            { "uniqid": "aud", "name": "Audio", "icon": "marker_audio.svg" },
            { "uniqid": "flsh", "name": "Flash", "icon": "marker_flash.svg" },
            { "uniqid": "gen", "name": "General", "icon": "marker_general.svg" },
            { "uniqid": "peri", "name": "Periscope", "icon": "marker_periscope.svg" },
            { "uniqid": "plum", "name": "Plume", "icon": "marker_plume.svg" },
            { "uniqid": "wak", "name": "Wake", "icon": "marker_wake.svg" },
            { "uniqid": "vis", "name": "Visual", "icon": "marker_visual.svg" }
            ]
        }
    },
    "gameTurn": 3,
    "infoType": true,
    "messageType": "InfoMessage",
    "name": "wargame-kzod28lc",
    "phase": "planning",
    "turnEndTime": "2022-02-15T16:55:11+00:00",
    "wargameInitiated": false,
    "wargameTitle": "Small wargame"
}

export default wargame