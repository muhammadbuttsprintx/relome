import { SchoolSchema } from "../../../schemas/School/index.js";

export const getAllSchools = async (req, res) => {
  try {
    const data = await SchoolSchema.find();
    if (!data) {
      return res.json({
        success: false,
        message: "Invalid Request",
      });
    }
    console.log(data);
    return res.json({
      success: true,
      data,
    });
  } catch (e) {
    console.log("Error:", e.message);
    return res.json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
