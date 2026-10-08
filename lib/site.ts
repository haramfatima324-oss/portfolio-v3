// Edit this file to update all site content.
export const site = {
  name: "Abdul Moeed",
  role: "Web Developer",
  url: "https://abdul-moeed.online",
  email: "hello@abdul-moeed.online", // TODO: replace with your real email
  // Add real profiles here, e.g. { label: "GitHub", href: "https://github.com/your-handle" }
  socials: [] as { label: string; href: string }[],
};
export const nav = [
  { id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "skills", label: "Skills" },
  { id: "services", label: "Services" }, { id: "projects", label: "Projects" }, { id: "process", label: "Process" }, { id: "contact", label: "Contact" },
];
export const skills = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"] },
  { group: "Styling", items: ["Tailwind CSS", "Responsive design", "Animations", "Design systems"] },
  { group: "CMS", items: ["WordPress", "Theme customisation", "Plugins", "Content setup"] },
  { group: "Workflow", items: ["Git & GitHub", "Performance", "Accessibility", "SEO basics"] },
];
export const services = [
  { icon: "code", title: "Website Development", text: "Fast, responsive sites built with modern frontend tooling and clean, maintainable code." },
  { icon: "wp", title: "WordPress Websites", text: "Custom, easy-to-manage WordPress sites tailored to your content and brand." },
  { icon: "layout", title: "Landing Pages", text: "Focused single-page experiences designed to turn visitors into enquiries." },
  { icon: "refresh", title: "Website Redesign", text: "Modernise an outdated site with better design, speed and usability." },
];
export const projects = [
  { title: "Portfolio V3", kind: "Current site", text: "A premium rebuild of my portfolio with refined typography, considered motion and a mobile-first layout.", tech: ["Next.js", "TypeScript", "Tailwind CSS"], live: "https://abdul-moeed.online/", repo: "" },
  { title: "Portfolio V2", kind: "Previous version", text: "The earlier portfolio, focused on clean design, responsive layouts and smooth interactions.", tech: ["HTML", "CSS", "JavaScript"], live: "https://v2.abdul-moeed.online/", repo: "" },
];
export const process = [
  { n: "01", t: "Discover", d: "Understand your goals, audience and content before anything is designed." },
  { n: "02", t: "Design", d: "Shape layout, typography and flow with attention to hierarchy and clarity." },
  { n: "03", t: "Build", d: "Develop a responsive, accessible site with clean, maintainable code." },
  { n: "04", t: "Launch", d: "Test across devices, optimise performance, ship and support." },
];
