/* import mongoose from "mongoose";
import dotenv from "dotenv"



dotenv.config({ path: '../.env'})


export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION || '')
    console.log("---> DB is connected papiii");
    
  } catch (error) {
    console.log(error);
  }
}  */