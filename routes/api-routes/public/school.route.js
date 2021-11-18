import { Router } from "express";
import school from "./../../../controllers/school/index.js";

const router = Router();

router.get("/", school.getAllSchools);
router.put("/:id", school.updateSchool);
router.post("/", school.createSchool);
router.delete("/:id", school.deleteSchool);

export default router;
