import pkg from "mongoose";
const { Schema, model } = pkg;

const School = new Schema({
  name: String,
  students: Number,
  classes: Number,
  teachers: Number,
  expense: Number,
  revenue: Number,
  profit: Number,
  createdAt: {
    type: String,
  },
});

export const SchoolSchema = model("School", School);
