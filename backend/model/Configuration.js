import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

const {
  HOST_URL,
  HOST,
  PORT,
  SQL_SERVER,
  SQL_PORT,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DB,
} = process.env;

const sqlEncrypt = (process.env.SQL_ENCRYPTED = true);

const Configuration = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  sql: {
    server: SQL_SERVER,
    database: SQL_USER,
    user: SQL_USER,
    password: SQL_PASSWORD,
  },
  options: {
    encrypt: sqlEncrypt,
    onableArithAbort: true,
  },
};

export default Configuration;
