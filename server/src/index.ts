import { MONGO_URI } from "./config";

const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const PORT = 3000;

// Connect to MongoDB database using Mongoose
const connection = async () => {
  await mongoose.connect(MONGO_URI);
};
connection();
console.log("db connected to: ", MONGO_URI);

// app.get("/ping", (_req: Request, res: Response) => {
//   console.log("Pong received" + new Date().toLocaleDateString());
//   res.send("Pong");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
