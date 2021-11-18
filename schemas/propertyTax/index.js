import pkg from "mongoose";
const { Schema, model } = pkg;

const PropertyTax = new Schema({
  ZipCode: String,
  PropertyTax: String,
});

export const PropertyTaxSchema = model("propertyTax", PropertyTax);
