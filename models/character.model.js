const mongoose = require("mongoose");

const CharacterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter character name"],
    },

    race: {
      type: String, ref:'Race',
      required: [true, "Please enter character race"],
    },

    class: {
      type: String, ref:'Role',
      required: [true, "Please enter character class name"],
    },

    level: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
