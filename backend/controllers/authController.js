import sql from "mssql";
import config from "../model/Configuration.js";
import bcrypt from "bcrypt";

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // console.log(username);
    let connection = await sql.connect(config);
    const results = await connection
      .request()
      .input("username", sql.VarChar, username)
      .query("SELECT * FROM users WHERE username = @username");
    const user = results.recordset[0];
    // console.log(user)
    if(!user){
        res.json({error:'user doesnt exists'})
    }
    else{
        if(bcrypt.compareSync(password,user.password)){
            res.json({message:'user is validated'})
        }
        else{
            res.send('wrong password')
        }
    }
  } catch (error) {
    res.json(error);
  }
};
