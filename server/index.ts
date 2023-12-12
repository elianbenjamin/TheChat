import mongoose from "mongoose";
import { MessageModel } from "./src/models/Messages";
import { UsuarioModel } from "./src/models/Users";



const uri = "mongodb+srv://elianbenjamin30:3zV8EcktVVdFniwT@cluster0.flhfwgz.mongodb.net/ChatOnline";

async function connectDB() {

    try {
      
        await mongoose.connect(uri)
        console.log("MongoDB connected successfully");
    } catch (error) {
      console.log("Error al conectar a la base de datos", error);
      
    }
    
  }
  connectDB()

   MessageModel.create(
    {
        text:'SE LOGROOO PAPA',
        
    }
  ) 

  
  UsuarioModel.create(
    {
        name:"Adolfii",
        email:"IATUSABEEES@gmail.com",
        password:"123456789",
        phone: 33456256

    }
  ) 

 


  
  