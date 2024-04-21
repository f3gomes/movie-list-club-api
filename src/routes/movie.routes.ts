import express from "express";
import {
  deleteMovie,
  getMovies,
  patchMovieLike,
  patchMovieStatus,
  postMovie,
} from "../controllers/movie.controller";

export const movieRoutes = express.Router();

movieRoutes.post("/movie/new", postMovie);
movieRoutes.get("/movie/list", getMovies);
movieRoutes.patch("/movie/watched/:id", patchMovieStatus);
movieRoutes.patch("/movie/likes/:id", patchMovieLike);
movieRoutes.delete("/movie/delete/:id", deleteMovie);
