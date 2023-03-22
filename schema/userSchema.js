import mongoose from "mongoose";
const clubLoginSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
const clubLogin = mongoose.model("clublogin", clubLoginSchema);
export default clubLogin;
