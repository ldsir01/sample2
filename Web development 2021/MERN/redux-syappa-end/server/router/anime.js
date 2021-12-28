import express from "express";
import { getAnime, createAnime } from "../controllers/anime.js";
const router = express.Router();

router.get("/", getAnime);

router.post("/", createAnime);

export default router;
