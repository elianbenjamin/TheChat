import app from "./src/app"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()




const PORT = 3000

// Connect to MongoDB database using Mongoose
mongoose
 .connect(process.env.DB_CONNECTION || "")
 .then(()=> {
    console.log("MongoDB connected")
})
 .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


app.get('/ping', (_req, res) => {
    console.log('Pong received' + new Date().toLocaleDateString())
    res.send('pong')
})

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);

})