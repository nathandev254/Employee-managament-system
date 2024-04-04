import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { connection } from "../config/config.js";


export const Login = async (req, res) => {

  try {
    const { userName, password } = req.body;

    connection.query(
      "SELECT * FROM users WHERE userName = ?",
      [userName],
      async (error, results) => {
        if (error) {
          return res.status(500).json({ error: "Error executing query", error });
        }

        const user = results[0];
        if (!user) {
          return res.json({ error: "Username doesn't exist" });
        }

        if (!bcrypt.compareSync(password, user.password)) {
          return res.json({ message: "Wrong credentials" });
        }

        const token = JWT.sign(
          { userName: user.userName, email: user.email },
          "LOGIN123",
          { expiresIn: "1h" }
        );

        return res.json({
          username: user.userName,
          email: user.email,
          user_id: user.id,
          token: `JWT ${token}`
        });
      }
    );
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
