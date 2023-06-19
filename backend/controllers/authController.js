import sql from 'mssql'
import config from '../model/Configuration.js'

export const Login = async (req,res) => {
    res.send('Logged in successfully')
}

export const Register = async (req,res) => {
    res.send('User registered successfully')
}