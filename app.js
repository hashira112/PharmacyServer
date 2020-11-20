const express = require("express")
const cors = require("cors")

const firebase = require('firebase/app')
require("firebase/database")

const app = express()

app.use(express.json());
app.use(cors())

const sales = require("./routes/sales")
const login = require("./routes/login")
const user = require("./routes/user")
const products = require("./routes/products")

app.use("/api/sales", sales)
app.use("/api/login", login)
app.use("/api/user", user)
app.use("/api/products", products)


app.listen(process.env.PORT, ()=>console.log('listening'))