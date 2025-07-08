import express from 'express'
import dotenv from 'dotenv'
import urlRouter from './routes/UrlRoutes.js';
import cors from 'cors'

dotenv.config();

const CORS_ORIGIN = process.env.CORS_ORIGIN
const app = express();
console.log(CORS_ORIGIN)
app.use(cors({
  origin:CORS_ORIGIN,
  credentials:true
}))

app.get('/home',(req,res) => {
  res.json({
    msg:"Hello"
  })
})

app.use(express.json())

app.use(urlRouter)

export default app;