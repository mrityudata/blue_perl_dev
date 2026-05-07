import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  category: string;
  imageBefore: string;
  imageAfter: string;
  techStack: string[];
  client: string;
  link?: string;
  caseStudy: string;
  featured: boolean;
  createdAt: Date;
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  imageBefore: { type: String, required: true },
  imageAfter: { type: String, required: true },
  techStack: { type: [String], required: true },
  client: { type: String, required: true },
  link: { type: String },
  caseStudy: { type: String, required: true },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IProject>("Project", ProjectSchema);
