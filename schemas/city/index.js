import pkg from "mongoose";
const { Schema, model } = pkg;

const Cities = new Schema({
  postalCode: String,
  City: String,
  State: String,
  Region: String,
  NeighborhoodType: String,
  Diversity: String,
  Politics: String,
  ageTwentyTwoToThirtyFour: Number,
  ageThirtyFiveToFiftyFour: Number,
  ageFiftyFiveToSeventyFour: Number,
  twoByThreeToFourByFiveBed: String,
  twoByThreeBed: Number,
  fourByFiveBed: Number,
  bestSchool: String,
});

export const CitySchema = model("city", Cities, "city");
