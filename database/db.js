import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.set("strictQuery", false);
const Connection = async () => {
  const url = process.env.MONGO_URI;
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
};

export default Connection;
