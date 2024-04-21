import { Request, Response } from "express";
import { createMovie, findMovies } from "../services/movie.service";

export const postMovie = async (req: Request, res: Response) => {
  await createMovie(req, res);
};

export const getMovies = async (req: Request, res: Response) => {
  await findMovies(req, res);
};
