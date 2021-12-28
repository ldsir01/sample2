import mongoose from "mongoose";

const Schema = mongoose.Schema({
  name: String,
  season: Number,
});

const postAnime = mongoose.model("postAnime", Schema);
export default postAnime;
