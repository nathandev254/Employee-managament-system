import express from 'express'
import { Login,Register} from '../controllers/authController.js'

const AuthRoute = express.Router()

AuthRoute.route('/login').post(Login)
AuthRoute.route('/Register').post(Register)

export default AuthRoute