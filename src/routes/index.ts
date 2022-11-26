import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";

const router = Router();


connectToDatabase()
  .then(() => {
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };