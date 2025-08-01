import express from 'express'
import dotenv from 'dotenv'
import urlRouter from './routes/UrlRoutes.js';
import cors from 'cors'
import limiter from './config/ratelimiter.js';

dotenv.config();

const CORS_ORIGIN = process.env.CORS_ORIGIN
const app = express();


app.use(cors({
  origin:CORS_ORIGIN,
  credentials:true
}))

app.use(limiter)

app.use(express.json())

app.use(urlRouter)

export default app;