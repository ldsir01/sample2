import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import router from "./router/anime.js"

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', router)

const DATABASE_URL = "mongodb+srv://dbplay:dbplay@cluster0.jrr1z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = 5000
mongoose.connect(DATABASE_URL)
    .then(() => { app.listen(PORT, console.log(`Connected to port ${PORT}`)) })
    .catch((error) => {
        console.log(error.message)
    })


