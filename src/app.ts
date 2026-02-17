import express from "express";
import cors from "cors";
import "@config/logging";

import { loggingHandler } from "@middleware/logging.handler";
import { routeNotFound } from "@middleware/route-not-found.handler";
import { errorHandler } from "@middleware/error.handler";
import healthRoutes from "@routes/health.routes";

const app = express();

logging.log("----------------------------------");
logging.log("Initializing API");
logging.log("----------------------------------");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

logging.log("----------------------------------");
logging.log("Logging & Configuration");
logging.log("----------------------------------");
app.use(loggingHandler);
app.use(cors());

logging.log("----------------------------------");
logging.log("Define Routing");
logging.log("----------------------------------");
app.use(healthRoutes);

logging.log("----------------------------------");
logging.log("Define Routing Error");
logging.log("----------------------------------");
app.use(routeNotFound);
app.use(errorHandler);

export default app;
