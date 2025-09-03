import express from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import { connectDB } from './config/db.js'
import adminRouter from './Routes/adminRoute.js'
import BlogRoute from './Routes/blogRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>res.send("API is working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog',BlogRoute)

const PORT = 3000
app.listen(PORT, await connectDB(),()=>{
    console.log("db connected")
    console.log("server running in port",PORT)
})

export default app