import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./src/routes/index.js";
import { notFound, errorHandler } from "./src/middlewares/error.middleware.js";

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.use(cors(corsOptions));
app.use("/", routes);

app.use(notFound);
app.use(errorHandler);

export default app;