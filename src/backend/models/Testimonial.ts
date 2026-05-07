import mongoose, { Schema, Document } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const TestimonialSchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  content: { type: String, required: true },
  avatar: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
});

export default mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
