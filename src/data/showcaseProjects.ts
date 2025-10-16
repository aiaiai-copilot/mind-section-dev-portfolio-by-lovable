export interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  technologies: string[];
  showcasePath: string;
  previewUrl?: string;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "oauth-simplest",
    title: "Simplest OAuth",
    description: "Simplest OAuth",
    category: "OAuth authentication",
    image: new URL("@/assets/oauth-simplest.jpg", import.meta.url).href,
    features: ["Security", "Authentication", "OAuth"],
    technologies: ["OAuth", "React", "TypeScript"],
    showcasePath: "/showcase/oauth/simplest/",
    previewUrl: "https://preview--showcase-oauth-simplest-web.lovable.app/",
  },
  {
    id: "blog",
    title: "Blog Platform",
    description:
      "Content management system with markdown support and user authentication | Content management system with markdown support and user authentication | Content management system with markdown support and user authentication | Content management system with markdown support and user authentication | Content management system with markdown support and user authentication | |",
    category: "Content Platform",
    image: new URL("@/assets/view-live-demo-placeholder.jpg", import.meta.url).href,
    features: ["Markdown Editor", "User Auth", "Comments", "Search & Tags"],
    technologies: ["React", "Supabase", "React Query"],
    showcasePath: "/dev/blog",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    description: "Multi-user application with user roles and real-time data",
    category: "Multi-user SaaS",
    image: new URL("@/assets/view-live-demo-placeholder.jpg", import.meta.url).href,
    features: ["User Roles", "Real-time Updates", "Analytics", "Team Management"],
    technologies: ["React", "Supabase", "Recharts"],
    showcasePath: "/dev/saas-dashboard",
  },
  {
    id: "ecommerce",
    title: "E-commerce Store",
    description: "Online store with product catalog, cart and payment integration",
    category: "E-commerce",
    image: new URL("@/assets/view-live-demo-placeholder.jpg", import.meta.url).href,
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"],
    technologies: ["React", "Stripe", "Supabase"],
    showcasePath: "/dev/ecommerce",
  },
  {
    id: "admin-panel",
    title: "Admin Panel",
    description: "Comprehensive admin interface for managing users and content",
    category: "Admin Dashboard",
    image: new URL("@/assets/view-live-demo-placeholder.jpg", import.meta.url).href,
    features: ["User Management", "Data Tables", "Role Permissions", "Activity Logs"],
    technologies: ["React", "TypeScript", "Supabase"],
    showcasePath: "/dev/admin-panel",
  },
  {
    id: "booking",
    title: "Booking System",
    description: "Appointment scheduling with calendar integration and notifications",
    category: "Business App",
    image: new URL("@/assets/view-live-demo-placeholder.jpg", import.meta.url).href,
    features: ["Calendar View", "Email Notifications", "Payment Integration", "Booking Management"],
    technologies: ["React", "Supabase", "Date-fns"],
    showcasePath: "/dev/booking",
  },
];
