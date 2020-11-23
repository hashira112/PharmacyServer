const express = require("express");
const route = express.Router();

const firebase = require('firebase/app')
require("firebase/database")

const firebaseConfig = {
  apiKey: "AIzaSyBsYqbJ95VvX_kj41Zn89viaDIzrQ_dEZY",
  authDomain: "pharmacydashboard-b9262.firebaseapp.com",
  databaseURL: "https://pharmacydashboard-b9262.firebaseio.com",
  projectId: "pharmacydashboard-b9262",
  storageBucket: "pharmacydashboard-b9262.appspot.com",
  messagingSenderId: "127721288589",
  appId: "1:127721288589:web:44f97dec6ab3621a8dc3c4"
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

route.get("/", (req, res) => {
  database.ref('/sales').once('value').then(data =>{
    const list = data.val()
    res.send(list)
})
});

route.post("/", (req, res) => {
  database.ref('/sales').once('value').then(data =>{
  const list = data.val()

  const salesRef = database.ref('sales/')

  const sale = salesRef.push()
  sale.set({
    name: req.body.name,
    date: req.body.date,
    amount: req.body.amount,
    id: Object.keys(list).length,
  })
  res.send('Sales Added')
})
})

module.exports = route;