import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import todoRoute from "./routes/todos.js";

dotenv.config();

const app = express();


app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/todo", todoRoute)
app.get('/', (req, res) => {
    res.send("Hello To My API HEROKU wale")
})


const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://dbcrud:dbcrud@cluster0.r2gua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5500;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { app.listen(PORT, () => { console.log(`Connection to port ${PORT}`) }) })
    .catch((err) => { console.log(err.message) })

