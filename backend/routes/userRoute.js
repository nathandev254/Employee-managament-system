import express from 'express'
import { CreateEmployee } from '../controllers/userController.js'

const UserRoute = express.Router()

UserRoute.route('/').post().get(CreateEmployee).put().delete()

export default UserRoute