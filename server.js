const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')

const musicRoutes = require('./routes/musicRoutes') 

dotenv.config()
const app = express()

app.use(express.json())

app.use(morgan('dev'))
app.use("/pets" , musicRoutes)

mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected' , ()=>{
    console.log("connected to mongoDB")
    console.log(process.env.DB_URI)
})

app.listen(3000, () =>{
    console.log('app is listening to port 3000')
})