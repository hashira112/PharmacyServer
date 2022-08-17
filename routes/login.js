const express = require("express");
const route = express.Router();

const firebase = require('firebase/app')
require("firebase/database")


const database = firebase.database()

route.post("/", (req, res) => {
  database.ref('/user').once('value').then(data =>{
    const list = data.val()
    var user = list.id
    var pass = list.password

  const { username, password } = req.body
  if (!username || !password) {
    res.status(422).json({
      error: "Please enter all fields"
    })
  }
  
  else {
    if (username !== user || password !== pass) {
      res.status(422).json({
        error: "Invalid details"
      })
    }
    res.json({
      message: "Login Success"
    })
  }
})
})

module.exports = route;