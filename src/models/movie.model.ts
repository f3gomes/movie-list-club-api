import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  group: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
  watched: {
    type: Boolean,
    required: true,
    default: false,
  },
  genreIds: {
    type: [Number],
    required: true,
  },
});

export const Movie = mongoose.model("Movie", movieSchema);
