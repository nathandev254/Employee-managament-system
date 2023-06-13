import express from "express";
import Configuration from "./model/Configuration.js";

const app = express();

app.get("/", (req, res) => {
  res.send(`welcome to my server`);
});

app.listen(Configuration.port, () => {
  console.log(`i create my first server at 20`);
});
