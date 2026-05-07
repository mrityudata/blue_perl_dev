import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import apiRoutes from "./src/backend/routes/api.ts";
import Project from "./src/backend/models/Project.ts";
import Testimonial from "./src/backend/models/Testimonial.ts";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Database Connection
  const MONGODB_URI = process.env.MONGODB_URI;
  if (MONGODB_URI) {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("Connected to MongoDB established");

      // Seeding Logic (For Demo)
      const seedData = async () => {
        const pCount = await Project.countDocuments();
        if (pCount === 0) {
          console.log("Seeding initial projects...");
          await Project.create([
            {
              title: "FinTech Hub App",
              description: "A comprehensive banking solution built with Flutter.",
              category: "FinTech",
              imageBefore: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
              imageAfter: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
              techStack: ["Flutter", "Riverpod", "Firebase", "Node.js"],
              client: "Global Bank Inc",
              caseStudy: "Redesigned the entire user onboarding flow, reducing dropout rates by 40%.",
              featured: true
            },
            {
              title: "EcoTrack",
              description: "Sustainability tracking app for conscious consumers.",
              category: "Lifestyle",
              imageBefore: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
              imageAfter: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=800",
              techStack: ["Flutter", "GraphQL", "MongoDB"],
              client: "EcoGreen Org",
              caseStudy: "Implemented real-time carbon footprint calculations using complex mathematical models.",
              featured: true
            }
          ]);
        }

        const tCount = await Testimonial.countDocuments();
        if (tCount === 0) {
          console.log("Seeding initial testimonials...");
          await Testimonial.create([
            {
              name: "Sarah Chen",
              role: "Product Manager",
              company: "TechFlow",
              content: "The attention to detail in the Flutter implementation was outstanding. Highly recommend for any complex mobile needs.",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
              rating: 5
            }
          ]);
        }
      };
      seedData();
    } catch (err) {
      console.error("MongoDB connection error:", err);
    }
  } else {
    console.warn("MONGODB_URI not found in .env. Using mock data mode.");
  }

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Portfolio Backend is running" });
  });

  // MVC Routes
  app.use("/api", apiRoutes);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
