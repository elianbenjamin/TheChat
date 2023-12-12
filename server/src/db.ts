import mongoose from "mongoose";

const uri = "mongodb+srv://elianbenjamin30:3zV8EcktVVdFniwT@cluster0.flhfwgz.mongodb.net/ChatOnline";

export async function connectDB() {

    try {
      
        await mongoose.connect(uri)
        console.log("MongoDB connected successfully");
    } catch (error) {
      console.log("Error al conectar a la base de datos", error);
      
    }
    
  }