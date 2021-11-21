import pkg from "mongoose";
const { Schema, model } = pkg;

const PropertyTax = new Schema({
  zipCode: String,
  propertyTax: Number,
});

export const PropertyTaxSchema = model(
  "propertyTax",
  PropertyTax,
  "propertyTax"
);
