import pkg from "mongoose";
const { Schema, model } = pkg;

const StateTax = new Schema({
  TaxType: String,
  State: String,
  Deduction: String,
  RangeMin: String,
  RangeMax: String,
  RangeTax: String,
  LocalTax: String,
  Tax: String,
});

export const StateTaxSchema = model("stateTax", StateTax);
