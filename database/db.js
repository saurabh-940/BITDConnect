import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const Connection = async () => {
  const url = "mongodb://127.0.0.1:27017/bitdevent";
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
