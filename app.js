import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDataBase from "./src/database/db";
import router from "./src/routes/index.js";

const port = 2000;

const app = express();
connectDataBase();

app.use(express.json());
app.use(cors);
app.use(router);


app.listen(port, () => {
  console.log(`🟢 Server On ${port}`);
});
