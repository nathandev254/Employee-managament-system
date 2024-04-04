import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

// Create MySQL connection
export const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');

    const createUsersTable = `CREATE TABLE IF NOT EXISTS Users (
        id VARCHAR(255) PRIMARY KEY,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        userName VARCHAR(255) DEFAULT NULL,
        firstName VARCHAR(255) DEFAULT NULL,
        lastName VARCHAR(255) DEFAULT NULL
    )`;

    connection.query(createUsersTable, (err) => {
        if (err) {
            console.error('Error creating Users table:', err);
            return;
        }
        console.log('Users table created successfully or already exists!');
    });
})