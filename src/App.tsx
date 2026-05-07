/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { fetchProjects, fetchTestimonials, Project, Testimonial } from "./services/api";
import Layout from "./components/layout/Layout";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import CaseStudies from "./pages/CaseStudies";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function AnimatedRoutes({ projects, testimonials, isLoading }: {
  projects: Project[],
  testimonials: Testimonial[],
  isLoading: boolean
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Profile />} />
          <Route path="/projects" element={<Projects projects={projects} isLoading={isLoading} />} />
          <Route path="/case-studies" element={<CaseStudies projects={projects} />} />
          <Route path="/testimonials" element={<Testimonials testimonials={testimonials} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [pData, tData] = await Promise.all([
          fetchProjects(),
          fetchTestimonials()
        ]);
        setProjects(pData);
        setTestimonials(tData);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <Router>
      <Layout>
        <AnimatedRoutes
          projects={projects}
          testimonials={testimonials}
          isLoading={isLoading}
        />
      </Layout>
    </Router>
  );
}

