import express from 'express'
import { createUser, getProfile, loginUser, logoutUser } from '../controllers/userController.js'
import userControl from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/signup').post(createUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)

router.route('/profile').get(userControl, getProfile)

export default router