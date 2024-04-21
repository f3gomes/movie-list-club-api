import { Request, Response } from "express";
import { Movie } from "../models/movie.model";

export const createMovie = async (req: Request, res: Response) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

export const findMovies = async (_req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
