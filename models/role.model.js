const mongoose = require("mongoose");

const RoleSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "Please enter role id"],
    },

    name: {
      type: String,
      required: [true, "Please enter role name"],
    },

    description: {
      type: String,
      required: [true, "Please enter role description"],
    },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;
