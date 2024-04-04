import dotenv from 'dotenv'
dotenv.config()

const {SQL_DATABASE,SQL_SERVER,SQL_USER,SQL_PASSWORD} = process.env

const config = {
  user:SQL_USER,
  password:SQL_PASSWORD,
  server: SQL_SERVER,
  database: SQL_DATABASE,
  options: { 
    encrypt: true, 
    trustServerCertificate: false
  },
};
// console.log(config)



export default config
