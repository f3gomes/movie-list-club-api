import { Request, Response } from "express";
import {
  createMovie,
  findMovies,
  removeMovie,
  updateIncLikes,
  updateMovieStatus,
} from "../services/movie.service";

export const postMovie = async (req: Request, res: Response) => {
  await createMovie(req, res);
};

export const getMovies = async (req: Request, res: Response) => {
  await findMovies(req, res);
};

export const patchMovieStatus = async (req: Request, res: Response) => {
  await updateMovieStatus(req, res);
};

export const patchMovieLike = async (req: Request, res: Response) => {
  await updateIncLikes(req, res);
};

export const deleteMovie = async (req: Request, res: Response) => {
  await removeMovie(req, res);
};
