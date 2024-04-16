import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors);

const port = 2000;

app.listen(port, () => {
  console.log(`🟢 Server On ${port}`);
});
