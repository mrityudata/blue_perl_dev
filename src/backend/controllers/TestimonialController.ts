import { Request, Response } from "express";
import Testimonial from "../models/Testimonial.ts";

export const getTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials", error });
  }
};

export const createTestimonial = async (req: Request, res: Response) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: "Error creating testimonial", error });
  }
};
