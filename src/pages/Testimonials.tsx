import React from "react";
import { motion } from "motion/react";
import { Testimonial } from "../services/api";
import TestimonialCard from "../components/testimonials/TestimonialCard";

interface TestimonialsPageProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsPageProps> = ({ testimonials }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-12 py-10"
    >
      <div className="flex items-center gap-4">
        <span className="text-blue-500 font-mono text-xs">04</span>
        <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white">Client_Validations</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <TestimonialCard key={t._id} testimonial={t} />
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
