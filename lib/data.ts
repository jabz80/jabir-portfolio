import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import homepageImg from "@/public/homepage.png"
import gazeteerImg from "@/public/Screenshot 2023-12-14 at 5.12.08 pm.png"
import revisehubImg from "@/public/Screenshot 2023-12-14 at 5.16.35 pm.png"
import simplechefImg from "@/public/simple.chef.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "London",
    description:
      "I graduated as a Full Stack Developer after 3 months of studying at La Fosse Academy. This equipped me with a unique combination of technical acumen and problem-solving skills.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2023",
  },
  {
    title: "Codecademy",
    location: "Online",
    description:
      "I successfully completed the full stack course on Codecademy, broadening my skills in web development and programming. Also learning PHP, Python, JQuery",
    icon: React.createElement(CgWorkAlt),
    date: " Nov 2022 - Mar 2023",
  },
  {
    title: "Self Study Web Development",
    location: "Online",
    description:
      "Leveraging my robust engineering background, I embarked on a self-driven journey into the world of coding. My engineering skills played a pivotal role in this transition, allowing me to grasp complex concepts swiftly and apply them practically. Immersing myself in various online resources and coding communities.",
    icon: React.createElement(FaReact),
    date: "Aug 2022 - Nov 2022",
  },
  {
    title: "Heating Engineer",
    location: "Newcastle Upon Tyne",
    description:
      "As a heating engineer, I specialized in designing, installing, and maintaining heating systems, applying my technical expertise to ensure efficient and reliable thermal comfort in residential and commercial buildings.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2017 - Sept 2023",
  }
] as const;

export const projectsData = [
  {
    title: "Simple Chef",
    description:
      "Website dedicated to delicious and healthy meals, offering users a seamless way to discover and enjoy a wide range of delicious recipes",
    tags: ["React", "Vite", "CSS", "Framer Motion", "Javascript"],
    imageUrl: simplechefImg,
    githubUrl: "https://simple-chef-api.vercel.app",
  },
  {
    title: "Koding Kombat",
    description:
      "Koding Kombat is an engaging educational coding platform tailored for adolescents, providing a fun and interactive way to learn coding skills.",
    tags: ["React", "Vite", "PostgreSQL", "Bootstrap", "NodeJs"],
    imageUrl: homepageImg,
    githubUrl: "https://koding-kombat.onrender.com",
  },
  {
    title: "Revisehub",
    description:
      "A all in one productivity app to make studying and working more manageable. Incorporates a Pomodoro timer to keep you focused and motivated.",
    tags: ["React", "NodeJS", "PostgreSQL", "Tailwind", "Vite"],
    imageUrl: revisehubImg,
    githubUrl: "https://codefathers-project-frontend.onrender.com",
  },
  {
    title: "Gazeteer",
    description:
      "Gazetteer' is a useful web app built with Javascript, JQuery, and PHP, that gives a user information about Countries and Cities located all over the world.",
    tags: ["HTML", "Bootstrap", "PHP", "Javascript", "JQuery"],
    imageUrl: gazeteerImg,
    githubUrl: "https://jabz-ali.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;