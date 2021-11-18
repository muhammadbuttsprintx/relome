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
  ageTwentyTwoToThirtyFour: String,
  ageThirtyFiveToFiftyFour: String,
  ageFiftyFiveToSeventyFour: String,
  twoByThreeToFourByFiveBed: String,
  twoByThreeBed: String,
  fourByFiveBed: String,
  bestSchool: String,
});

export const CitySchema = model("citie", Cities);
