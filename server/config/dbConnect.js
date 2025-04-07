import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
  console.log("Db Connected!");
};
