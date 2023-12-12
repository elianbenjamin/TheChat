import app from "./src/app";
import { connectDB } from "./src/db";
import { MessageModel } from "./src/models/Messages";
import { UsuarioModel } from "./src/models/Users";


const PORT = 3000




  connectDB()


/*   MessageModel.create(
   {
       text:'[nodemon] app crashed - waiting for file changes before starting...',
       
   }
  )  */
  
 /*  
  UsuarioModel.create(
   {
       name:"power",
       email:"poeeer@gmail.com",
       password:"12356789",
       phone: 33456256
  
   }
  )  */

  app.get('/ping', (_req, res) => {
    console.log('Pong received' + new Date().toLocaleDateString())
    res.send('pong')
})

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})  







 


  
  