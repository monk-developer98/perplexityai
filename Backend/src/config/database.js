import mongoose from "mongoose";

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb connected: ${conn.connection.host}`)
}

export default connectDB