import { Schema, model } from "mongoose";

interface User {
  name: string;
  email: string;
  password?: string;
  phone?: number;
}

const Usuario = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
   type: String,
  },
  phone:{
  type:  Number,
  } 
    
  
});

export const UsuarioModel = model("User", Usuario);
