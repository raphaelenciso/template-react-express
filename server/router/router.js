import express from "express";

import { getIndex } from "../controllers/index.js";
import { getDashboard } from "../controllers/dashboard.js";

const router = express.Router();

router.get("/", getIndex);
router.get("/dashboard", getDashboard);

export default router;
