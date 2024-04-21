import { Request, Response } from "express";
import {
  createMovie,
  findMovies,
  updateMovieStatus,
} from "../services/movie.service";

export const postMovie = async (req: Request, res: Response) => {
  await createMovie(req, res);
};

export const getMovies = async (req: Request, res: Response) => {
  await findMovies(req, res);
};

export const patchMovie = async (req: Request, res: Response) => {
  await updateMovieStatus(req, res);
};
