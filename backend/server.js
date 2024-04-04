import express from "express";
import UserRoute from "./routes/EmployeeRoute.js";
import AuthRoute from "./routes/authRoute.js";
import cors from 'cors'

const app = express();
const PORT = 8081;

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// route middlewares
app.use("/employee", UserRoute);
app.use("/", AuthRoute);


app.listen(PORT, () => {
  console.log(`Server up and running..`);
});
