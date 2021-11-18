import { Router } from "express";
import results from "../../../controllers/results/index.js";

const router = Router();

router.get("/", results.getResults);
router.put("/:id", results.updateSchool);
router.post("/", results.createSchool);
router.delete("/:id", results.deleteSchool);

export default router;
