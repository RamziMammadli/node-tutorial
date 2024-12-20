import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'

const userControl = async (req,res,next) => {
    let token

    token = req.cookies.jwt

    if(!token) {
        res.json('token tapilmadi')
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET )

    req.user = await UserModel.findById(decoded.id).select('-password')

    next() 

}




export default userControl