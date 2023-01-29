const express = require('express')

const app = express()
const router = require('./router/main')

require('dotenv').config({path:'../private.env'})
app.use(express.json())

app.use("/api/v1", router)

const start = async () => {
    try {
        app.listen(8000, () => console.log("listening on port 8000..."))
    } catch (error) {
        console.log(error)
    }
}

start()
