import React from "react";
import { Testimonial } from "../../services/api";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 relative"
    >
      <Quote className="absolute top-6 right-8 text-blue-500/10" size={32} />
      
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < testimonial.rating ? "text-blue-500 fill-blue-500" : "text-white/5"}
          />
        ))}
      </div>

      <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans italic">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-lg border border-[#1e293b]"
        />
        <div>
          <h4 className="font-bold text-white text-sm leading-none mb-1">{testimonial.name}</h4>
          <p className="text-[9px] text-slate-500 font-mono uppercase tracking-widest font-bold">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
