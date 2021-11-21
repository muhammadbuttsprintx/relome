import pkg from "mongoose";
const { Schema, model } = pkg;

const StateTax = new Schema({
  taxType: String,
  state: String,
  deduction: Number,
  rangeMin: Number,
  rangeMax: Number,
  rangeTax: Number,
  localTax: String,
  tax: Number,
});

export const StateTaxSchema = model("stateTax", StateTax, "stateTax");
