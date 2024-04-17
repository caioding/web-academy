import express, { Request, Response } from "express";
import dotenv from "dotenv";

import validateEnv from "./utils/validateEnv";
import router from "./router";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 4444;

app.use(router);

app.listen(PORT, () => {
  console.log(`serve em ${PORT}`);
});
