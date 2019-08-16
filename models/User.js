const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    FacebookID: String,
    name: String,
    birthday: Date,
    email: String,
    picture: Object
  },
  { strict: false }
);

mongoose.model("users", userSchema);
