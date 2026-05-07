import express from "express";
import * as ProjectController from "../controllers/ProjectController.ts";
import * as TestimonialController from "../controllers/TestimonialController.ts";

const router = express.Router();

// Projects
router.get("/projects", ProjectController.getProjects);
router.get("/projects/:id", ProjectController.getProjectById);
router.post("/projects", ProjectController.createProject);

// Testimonials
router.get("/testimonials", TestimonialController.getTestimonials);
router.post("/testimonials", TestimonialController.createTestimonial);

export default router;
