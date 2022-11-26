import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";
import { AccountClientRouter } from "./accounts/client.routes";
import { CompanyRouter } from "./accounts/company.routes";

const router = Router();


connectToDatabase()
  .then(() => {
    router.use("/company", CompanyRouter)
    router.use("/client", AccountClientRouter);
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };