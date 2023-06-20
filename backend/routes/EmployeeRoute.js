import express from "express";
import {
  CreateEmployee,
  GetEmployees,
  UpdateEmployee,
  DeleteEmployee,
} from "../controllers/EmployeeController.js";

const UserRoute = express.Router();

UserRoute.route("/").post(CreateEmployee).get(GetEmployees);
UserRoute.route("/:id").put(UpdateEmployee).delete(DeleteEmployee);

export default UserRoute;
