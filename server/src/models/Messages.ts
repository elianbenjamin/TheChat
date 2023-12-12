import { Schema, model } from "mongoose";

interface Message {
  text: string;
  date: Date;
}

const MessageUser = new Schema<Message>({
  text: { 
     type: String,
     require: true 
    },
    date: {
      type: Date,
      default: Date.now()
    }
});
export const MessageModel = model("Message", MessageUser);


