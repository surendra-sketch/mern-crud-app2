import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import router from "./routes/userRoutes.js";
import Dbconnection from "./config/DBconnection.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Dbconnection();
app.use("/api", router);

// serve frontend

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("Please set to production mode");
  });
}

// app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
