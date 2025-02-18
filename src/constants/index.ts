import type {
  TNavLink,
  TService,
  TTechnology,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  msstones,
  threejs,
  upraising,
  DeepDoc
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Development",
    icon: web, // Replace this with a relevant icon if available
  },
  {
    title: "AI-Driven Sites",
    icon: mobile, // Replace with a GenAI-related icon
  },
  {
    title: "Generative AI",
    icon: backend,
  },
  {
    title: "Software Consulting",
    icon: creator, // Replace with a consulting-related icon if available
  },
];


const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// const experiences: TExperience[] = [
//   {
//     title: "React.js Developer",
//     companyName: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     companyName: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     companyName: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     companyName: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shelly proved me wrong.",
    name: "Soundra Pandian",
    designation: "Co-Founder",
    company: "Upraising Communications",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like shelly does.",
    name: "Bakthavachalam ",
    designation: "Director",
    company: "MC Stones",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects: TProject[] = [
  {
    name: "DeepDoc",
    description:
      "A RAG-based Gen AI app for a college client using LangChain and a vector database in Python, with a React frontend. It allows students to query academic materials and get accurate, cited answers in a structured note-taking format",
    tags: [
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "Langchain",
        color: "green-text-gradient",
      },
      {
        name: "Generative AI",
        color: "pink-text-gradient",
      },
    ],
    image: DeepDoc,
    sourceCodeLink: "https://deepdoc.netlify.app/",
  },
  {
    name: "upraising Communications",
    description: 
    "A marketing website for an outdoor advertising agency specializing in billboards and other advertising solutions. We handled the content creation, design, development, and deployment of the website using HTML, CSS, and JavaScript.",  
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Rest API",
        color: "pink-text-gradient",
      },
    ],
    image: upraising,
    sourceCodeLink: "https://upraisingcommunications.in/",
  },
  {
    name: "MC Stones",
    description: 
      "A marketing website for a granite stone consulting business. We managed the content creation, design, and development of the website, providing a professional online presence tailored to showcase their services and expertise.",    
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: msstones,
    sourceCodeLink: "https://mcstones.in/",
  },
 
];

export { services, technologies, testimonials, projects };
