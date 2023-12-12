import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from "morgan";


const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

export default app;