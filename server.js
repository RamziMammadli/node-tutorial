import express from "express"
import Dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
import BookRouter from './router/BookRoutes.js'
import JurnalRouter from './router/JurnalRoutes.js'
import UserRouter from './router/UserRoutes.js'
import cors from 'cors'
import cookieParser from "cookie-parser"

Dotenv.config()

const app = express()

app.use(express.json())
app.use(cors('*'))
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT

app.use('/api/books', BookRouter)
app.use('/api/jurnals', JurnalRouter)
app.use('/api/users', UserRouter)

connectDB()

app.listen(PORT, () => {
    console.log(`backend running on ${PORT} port`); 
})