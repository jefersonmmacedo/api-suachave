import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";
import { AccountClientRouter } from "./accounts/client.routes";
import { CompanyRouter } from "./accounts/company.routes";
import { AcessRouter } from "./Acess/acess.routes";
import { AlertRouter } from "./Alert/alert.routes";
import { bankRoutes } from "./bank/bank.routes";
import { BrokerRouter } from "./Broker/broker.routes";
import { clientCompanyRoutes } from "./clientCompany/clientCompany.routes";
import { contactRoutes } from "./contact/contact.routes";
import { favoriteRoutes } from "./favorite/favorite.routes";
import { financerRoutes } from "./financer/financer.routes";
import { mailRoutes } from "./mail/mail";
import { negotiationsRoutes } from "./negotiations/negotiations.routes";
import { notificationsRoutes } from "./notification/notification.routes";
import { MyPlainRoutes } from "./plains/myplain.routes";
import { paymentRentRoutes } from "./plains/paymentRent.routes";
import { paymentsRoutes } from "./plains/payments.routes";
import { plainsRoutes } from "./plains/plains.routes";
import { PropertyRoutes } from "./property/property.routes";
import { groupsRecuperation } from "./recuperation/recuperation.routes";
import { SchedulingRouter } from "./scheduling/scheduling.routes";
import { SessionClientRouter } from "./sessions/sessions.routes";
import { ViewPropertyRoutes } from "./viewProperty/viewProperty.routes";


const router = Router();


connectToDatabase()
  .then(() => {
    router.use("/mail", mailRoutes);
    router.use("/company", CompanyRouter)
    router.use("/client", AccountClientRouter);
    router.use("/session", SessionClientRouter);
    router.use("/property", PropertyRoutes);
    router.use("/plains", plainsRoutes);
    router.use("/myplain", MyPlainRoutes);
    router.use("/payments", paymentsRoutes);
    router.use("/paymentRent", paymentRentRoutes);
    router.use("/favorite", favoriteRoutes);
    router.use("/scheduling", SchedulingRouter);
    router.use("/contact", contactRoutes);
    router.use("/bank", bankRoutes);
    router.use("/negotiations", negotiationsRoutes);
    router.use("/notification", notificationsRoutes);
    router.use("/clientCompany", clientCompanyRoutes);
    router.use("/financer", financerRoutes);
    router.use("/acess", AcessRouter);
    router.use("/broker", BrokerRouter);
    router.use("/alert", AlertRouter);
    router.use("/recuperation", groupsRecuperation);
    router.use("/viewproperty", ViewPropertyRoutes);
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };