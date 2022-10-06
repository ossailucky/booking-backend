import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import mongoose, { connect } from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/user.js"
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

dotenv.config()

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to mongoDB")
    }catch(error){
        throw error
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

// middlewares
app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelRoute)
app.use("/api/rooms",roomRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"

   return res.status(errorStatus).json({
    success: false,
    status:errorStatus,
    message: errorMessage,
    stack: err.stack,
   })
})


app.listen(8800,()=>{
    connectDB()
   console.log("Connected to backend") 
})