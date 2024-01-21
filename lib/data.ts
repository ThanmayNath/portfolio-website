import BulkBuy from "@/public/BulkBuy.png";
import AI from "@/public/AI.png";
import NotesHub from "@/public/NotesHub.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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

export const projectsData = [
  {
    title: "Text Sentiment(AI)",
    description:
      "Developed a Text Sentiment Analysis Platform by a Long Short-Term Memory (LSTM) neural network, enabling businesses to effectively understand customer feedback.",
    tags: ["Python", "Pandas", "Keras", "scikit-learn"],
    imageUrl: AI,
    link: "https://github.com/ThanmayNath/TextSentimentValidator",
  },
  {
    title: "Bulk-Buy",
    description:
      "Developed an e-commerce solution with a dual-interface system, catering to the unique needs of both wholesalers and retailers.",
    tags: ["Next.js", "Golang", "Node.js", "Express", "PostgreSQL", "Rozerpay"],
    imageUrl: BulkBuy,
    link: "https://github.com/ThanmayNath/wholesaler-retailer-platform-BulkBuy-",
  },
  {
    title: "Notes Hub",
    description:
      "Designed a web application for students to easily share notes and collaborate on their studies.",
    tags: ["Node.js", "Express", "React.js", "MySQL"],
    imageUrl: NotesHub,
    link: "https://github.com/ThanmayNath/NotesHub-StudentNotes",
  },
] as const;

export const experiencesData = [
  {
    title: "ABBS",
    location: "Bangalore",
    description:
      "Acquired comprehensive knowledge in computer science foundations and successfully graduated in 2023.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Software Developer @Worko.ai",
    location: "Bangalore",
    description:
      "Engineered over 45+ high-performance REST APIs, instrumental in crafting a robust Minimum Viable Product (MVP) that underscored system excellence.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const skillsData = {
  "Programming Languages": [
    "TypeScript",
    "Golang",
    "Python",
    "C++",
    "Java",
    "JavaScript",
    "HTML/CSS",
  ],
  Frameworks: [
    "Node.js",
    "Express.js",
    "REST API",
    "Gin",
    "ReactJS",
    "Next.js",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"],
  Tools: ["Git", "GitHub", "Postman", "Docker", "Kubernetes"],
} as const;
