import express from "express";
import UserRoute from "./routes/EmployeeRoute.js";
import AuthRoute from "./routes/authRoute.js";

const app = express();
const PORT = 8081;

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route middlewares
app.use("/employee", UserRoute);
app.use("/", AuthRoute);


app.listen(PORT, () => {
  console.log(`i create my first server at 20`);
});
