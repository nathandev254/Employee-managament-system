import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { connection } from "../config/config.js";

export const CreateEmployee = async (req, res) => {
  const { userName, password, email, firstName, lastName } = req.body;
  const hashedpassword = bcrypt.hashSync(password, 10);

  const id = uuid()
  try {
    connection.query(
      "SELECT * FROM users WHERE email = ? OR userName = ?",
      [email, userName],
      (error, results) => {
        if (error) {
          return res.status(500).json({ message: "Failed to execute query", error });
        }

        const user = results[0];
        if (user) {
          return res.status(201).json({ message: "Employee already exists" });
        }

        connection.query(
          "INSERT INTO users (id, userName, password, email, firstName, lastName) VALUES (?, ?, ?, ?, ?, ?)",
          [id, userName, hashedpassword, email, firstName, lastName],
          (insertError) => {
            if (insertError) {
              return res.status(500).json({ message: "Failed to create employee", insertError });
            }
            return res.status(200).json({ message: "User created successfully" });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Failed to add employee" });
  }
};

export const GetEmployees = async (req, res) => {
  try {
    connection.query("SELECT * FROM users", (error, results) => {
      if (error) {
        return res.status(404).json({ message: "Server failure" });
      }
      return res.status(200).json({ message: "employee accessed successfully", data: results });
    });
  } catch (error) {
    res.status(404).json({ message: "Server failure" });
  }
};

export const GetEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    connection.query(
      "SELECT * FROM users WHERE id = ?",
      [id],
      (error, results) => {
        if (error) {
          return res.status(404).json({ message: "Failed to access employee" });
        }
        return res.status(200).json({ message: "Employee accessed successfully", data: results });
      }
    );
  } catch (error) {
    res.status(404).json({ message: "Failed to access employee" });
  }
};

export const UpdateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email, lastName, firstName } = req.body;

    connection.query(
      "UPDATE users SET userName = ?, email = ?, lastName = ?, firstName = ? WHERE id = ?",
      [userName, email, lastName, firstName, id],
      (error) => {
        if (error) {
          return res.status(404).json({ message: "Failed to update employee" });
        }
        return res.status(200).json({ message: "Employee updated successfully" });
      }
    );
  } catch (error) {
    res.status(404).json({ message: "Failed to update employee" });
  }
};

export const DeleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    connection.query(
      "DELETE FROM users WHERE id = ?",
      [id],
      (error) => {
        if (error) {
          return res.status(404).json({ message: "Failed to delete employee" });
        }
        return res.status(200).json({ message: "Employee deleted successfully" });
      }
    );
  } catch (error) {
    res.status(404).json({ message: "Failed to delete employee" });
  }
};
