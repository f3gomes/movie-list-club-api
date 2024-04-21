import cors from "cors";
import express, { Application, Request, Response } from "express";
import { main as connectDB } from "./config/database";
import { movieRoutes } from "./routes/movie.routes";

export const app: Application = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "API is on!",
  });
});

connectDB();
app.use("/api", movieRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
