import UserModel from "../models/UserModel.js";
import { generateToken } from "../utils/generateToken.js";

const createUser = async (req,res) => {
    const {name, email, password} = req.body

    const user = await UserModel.findOne({email})

    if(user){
        res.json('user atriq var') 
    }

    await UserModel.create({
        name:name,
        email:email,
        password:password
    })
    res.status(201).json('user created')
}

const loginUser = async (req,res) => {
    const {email, password} = req.body

    const user = await UserModel.findOne({email})

    if(user && await user.passwordControl(password)) {
        generateToken(res, user._id)
        res.json('logged in')
    } else {
        res.json('xeta bas verdi')
    }
}

const logoutUser = async (req,res ) => {
    res.cookie('jwt', '', {
        httpOnly:true,
        expires: new Date (0)
    })

    res.json('logged out')
}

const getProfile = async (req ,res) => {
    if(req.user) {
        res.json({
            name:req.user.name,
            email: req.user.email,
            password:req.user.password
        })
    }else {
        res.json('unauth')
    }
}

export {createUser, loginUser, logoutUser, getProfile}