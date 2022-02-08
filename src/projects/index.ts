export const projects: Project[] = [
  {
    name: "Templific",
    categories: ["Web Application"],
    technologies: ["React", "Nodejs", "Mongodb"],
    description:
      "Templific is an easy to use graphic template editor for Etsy sellers.",
  },
];
type Technology = "React" | "Nodejs" | "Mongodb";
type Categories = "Web Application" | "Animation";
interface Project {
  name: string;
  categories: Categories[];
  technologies: Technology[];
  description?: string;
  liveLink?: string;
  githubLink?: string;
}
