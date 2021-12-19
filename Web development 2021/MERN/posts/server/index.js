import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/posts", router);

const CONNECTION_URL =
  "mongodb+srv://dbpost:dbpost@cluster0.ydeo8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, console.log("running on port  " + PORT));
  })
  .catch((err) => {
    console.log(err);
  });
