const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      LastName: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      job_Title: {
        type: String,
      },
      gender: {
        type: String,
      },
    },
    { timestamps: true }
  );
//schema modle
const User = mongoose.model("user", userSchema);
module.exports = User;