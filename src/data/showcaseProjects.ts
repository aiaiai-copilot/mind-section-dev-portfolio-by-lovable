export interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  technologies: string[];
  showcasePath: string;
  isLive?: boolean;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "oauth-simplest",
    title: "Simplest authentication",
    description: "A demonstration of client-side only authentication, allowing users to sign in with their existing accounts from major providers like Google or GitHub without needing a backend",
    category: "OAuth authentication",
    image: new URL("@/assets/oauth-simplest.jpg", import.meta.url).href,
    features: ["Security", "Authentication", "OAuth"],
    technologies: ["OAuth", "React", "TypeScript"],
    showcasePath: "/showcase/oauth/simplest/",
    isLive: true,
  },
  {
    id: "telegram-bot-messaging",
    title: "Telegram Bot messaging",
    description:
      "Instant sending of data from a web form to a Telegram channel",
    category: "Telegram Bot",
    image: new URL("@/assets/telegram-bot-messaging.png", import.meta.url).href,
    features: ["Telegram Bot", "Sending messages", "Integration"],
    technologies: ["Telegram", "Web", "Serverless"],
    showcasePath: "/showcase/telegram-bot/messaging/",
    isLive: true,
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
    isLive: false,
  },
];
