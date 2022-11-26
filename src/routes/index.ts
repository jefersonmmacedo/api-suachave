import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";
import { AccountClientRouter } from "./accounts/client.routes";
import { CompanyRouter } from "./accounts/company.routes";
import { MyPlainRoutes } from "./plains/myplain.routes";
import { paymentsRoutes } from "./plains/payments.routes";
import { plainsRoutes } from "./plains/plains.routes";
import { PropertyRoutes } from "./property/property.routes";
import { SessionClientRouter } from "./sessions/sessions.routes";

const router = Router();


connectToDatabase()
  .then(() => {
    router.use("/company", CompanyRouter)
    router.use("/client", AccountClientRouter);
    router.use("/session", SessionClientRouter);
    router.use("/property", PropertyRoutes);
    router.use("/plains", plainsRoutes);
    router.use("/myplain", MyPlainRoutes);
    router.use("/payments", paymentsRoutes);
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };