import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGODB_CONNECTION;

const Dbconnection = async () => {
  await mongoose
    .connect(uri)
    .then(() => console.log("database connected....."))
    .catch((err) => console.log(err));
};

export default Dbconnection;
