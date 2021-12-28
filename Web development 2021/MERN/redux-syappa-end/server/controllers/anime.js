import postAnime from "../model/postAnime.js";

export const getAnime = async (req, res) => {
  try {
    const animes = await postAnime.find();
    res.send(animes);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
};

export const createAnime = async (req, res) => {
  const { name } = req.body;

  try {
    const newAnime = new postAnime({ name });
    await newAnime.save();
    res.send(newAnime);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
};
