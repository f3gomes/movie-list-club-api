import express from "express";
import {
  deleteMovie,
  getMovies,
  patchMovieGroup,
  patchMovieLike,
  patchMovieStatus,
  postMovie,
} from "../controllers/movie.controller";

export const movieRoutes = express.Router();

movieRoutes.post("/movie/new", postMovie);
movieRoutes.get("/movie/list/:group", getMovies);
movieRoutes.patch("/movie/group/:id", patchMovieGroup);
movieRoutes.patch("/movie/watched/:id", patchMovieStatus);
movieRoutes.patch("/movie/likes/:id", patchMovieLike);
movieRoutes.delete("/movie/delete/:id", deleteMovie);
