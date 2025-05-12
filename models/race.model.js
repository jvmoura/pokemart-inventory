const mongoose = require("mongoose");

const RaceSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "Please enter race id"],
    },

    name: {
      type: String,
      required: [true, "Please enter race name"],
    },

    description: {
      type: String,
      required: [true, "Please enter race description"],
    },
  },
  {
    timestamps: true,
  }
);

const Race = mongoose.model("Race", RaceSchema);

module.exports = Race;
