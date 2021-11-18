import { createSchool } from "./helpers/createSchool.js";
import { getAllSchools } from "./helpers/getSchool.js";
import { updateSchool } from "./helpers/updateSchool.js";
import { deleteSchool } from "./helpers/deleteSchool.js";

const school = {
  createSchool,
  getAllSchools,
  updateSchool,
  deleteSchool,
};

export default school;
