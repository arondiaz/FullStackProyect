import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  try {
    const db = await mongoose.connect(uri);
    console.log("connection success");
    console.log(`host ${db.connection.host}, puerto ${db.connection.port}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
