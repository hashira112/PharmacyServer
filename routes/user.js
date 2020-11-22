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
    const userRef = database.ref('user/')
    const user = userRef.push()
    user.set({
      name: req.body.name,
      id: req.body.id,
      password: req.body.password,
      phone: req.body.phone,
      userName: req.body.userName,
    })
    res.send('Added')
    
})

module.exports = route