export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "nek-consultants",
    title: "NEK Consultants Ltd",
    description:
      "A streamlined, compliance-focused website built with TypeScript, featuring a secure Brevo-powered contact form. Designed to meet regulatory needs while enabling potential clients to easily get in touch.",
    image: "/images/projects/nek-homepage.webp",
    link: "https://nek-consultants.com/",
  },
];
