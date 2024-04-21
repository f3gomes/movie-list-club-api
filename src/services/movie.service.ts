import { Request, Response } from "express";
import { Movie } from "../models/movie.model";
import { isValidObjectId } from "mongoose";

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

export const updateMovieStatus = async (req: Request, res: Response) => {
  if (!isValidObjectId(req.params.id)) {
    res.status(404).json({ error: "Invalid movie ID." });
  } else {
    try {
      const movie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {
          new: true,
        }
      );

      if (!movie) {
        res.status(404).json({ error: "Movie not found." });
      } else {
        res.status(200).json(movie);
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
