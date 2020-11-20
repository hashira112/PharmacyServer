const express = require("express");
const route = express.Router();
const firebase = require('firebase/app')
require("firebase/database")

const database = firebase.database()

route.get("/", (req, res) => {
  database.ref('/products').once('value').then(data =>{
    const list = data.val()
    res.send(list)
})
});

route.post("/", (req, res) => {
  database.ref('/products').once('value').then(data =>{
  const list = data.val()

  const productsRef = database.ref('products/')
  const product = productsRef.push()
  product.set({
    name: req.body.name,
    id: list.length,
    price: req.body.price,
  })
  res.send('Added')
})
})

route.put("/",(req,res)=>{
    const edit = req.body
    database.ref('/products').set(edit)
    res.send('Products Updated!')
})

module.exports = route;