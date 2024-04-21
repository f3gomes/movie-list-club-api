import express from "express";
import { getMovies, postMovie } from "../controllers/movie.controller";

export const movieRoutes = express.Router();

movieRoutes.post("/movie/new", postMovie);
movieRoutes.get("/movie/list", getMovies);
