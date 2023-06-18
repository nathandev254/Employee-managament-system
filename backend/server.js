import express from "express";
import UserRoute from "./routes/userRoute.js";

const app = express();
const PORT = 8081

app.use('/user',UserRoute)

app.listen(PORT,() => {
  console.log(`i create my first server at 20`);
});
