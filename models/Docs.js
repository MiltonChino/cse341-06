const mongoose = require("mongoose");

const docSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("docs", docSchema);
