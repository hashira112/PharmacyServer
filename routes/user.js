const express = require("express")
const route = express.Router()

const firebase = require('firebase/app')
require("firebase/database")

const database = firebase.database()

route.get("/", (req, res) => {
    database.ref('/user').once('value').then(data =>{
        const list = data.val()
        res.send(list)
    })
})

route.put("/", (req, res) => {
    const edit = req.body
    database.ref('/user').set(edit)
    res.send('Edited!')
})

module.exports = route