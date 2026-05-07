export interface Project {
  _id: string;
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
  createdAt: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const API_URL = "/api";

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) throw new Error("Failed to fetch projects");
    return response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await fetch(`${API_URL}/testimonials`);
    if (!response.ok) throw new Error("Failed to fetch testimonials");
    return response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};
