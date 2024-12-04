import mongoose from "mongoose";
import Dotenv from "dotenv";

Dotenv.config();

const connectDB = async () => {
    console.log('connectdb ise dusdu');
    
  try {
    
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(connect.connection.host);
  } catch (error) {
    console.log("xeta bas verdi");
  }
};

export default connectDB
