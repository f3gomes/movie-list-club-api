import express from "express";
import {
  getMovies,
  patchMovie,
  postMovie,
} from "../controllers/movie.controller";

export const movieRoutes = express.Router();

movieRoutes.post("/movie/new", postMovie);
movieRoutes.get("/movie/list", getMovies);
movieRoutes.patch("/movie/edit/:id", patchMovie);
