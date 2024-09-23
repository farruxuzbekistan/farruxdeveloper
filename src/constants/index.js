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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  django,
  python,
  ucell,
  bos,
  weather,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IT Teacher and Mentor",
    icon: creator,
  },
];

const technologies = [
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
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
];

const experiences = [
  {
    title: "Junior Frontend Developer",
    company_name: "Addline",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2017 - October 2018",
    points: [
      "Developing and maintaining business websites using React.js and other modern frontend technologies.",
      "Collaborating with cross-functional teams, including designers, project managers, and backend developers, to create scalable and efficient web applications.",
      "Implementing responsive designs and ensuring optimal cross-browser compatibility for enhanced user experience.",
      "Contributing to code reviews and providing valuable feedback to other developers to improve code quality.",
      "Working as a freelancer to build customized websites that meet client requirements and maintain high functionality standards.",
    ],
  },
  {
    title: "Middle Frontend Developer",
    company_name: "Hamkorbank",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2018 - September 2019",
    points: [
      "Developing and maintaining the Hamkorbank website using modern frontend technologies.",
      "Collaborating with backend developers and cross-functional teams to enhance full-stack performance.",
      "Learning backend development from the team and applying it to improve server-side functionality.",
      "Improving both server-side and client-side functionalities for optimized performance and enhanced user experience.",
      "Ensuring responsive design and cross-browser compatibility to meet modern web standards.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Target Education",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2019 - Aug 2020",
    points: [
      "Building and maintaining Target Education websites and CRM system as a middle fullstack web developer.",
      "Developing a multiple-choice test platform similar to Bluebook for administering tests to students efficiently.",
      "Collaborating with cross-functional teams to ensure the seamless integration of front-end and back-end systems.",
      "Mentoring junior developers and guiding them in fullstack web development.",
      "Optimizing both server-side and client-side functionalities to improve the overall digital infrastructure of the organization.",
    ],
  },
  {
    title: "Full stack Developer,  IT Mentor",
    company_name: "Target IT school",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Aug 2023",
    points: [
      "Teaching web development to students at Target IT School for over 3 years, helping them become proficient developers.",
      "Building e-commerce shops, Telegram bots, and various web applications with students as part of hands-on learning.",
      "Mentoring over 1,000 students, many of whom have gone on to work as professional web developers.",
      "Guiding students through real-world projects, including business websites, REST APIs, and mobile apps.",
      "Collaborating with students to solve complex programming problems and improve their coding skills.",
    ],
  },
  {
    title: "Full stack Developer, IT Teacher",
    company_name: "Target International school",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Aug 2024",
    points: [
      "Serving as the IT head teacher at Target International School, teaching programming to over 400 students.",
      "Guiding students to build real-world applications and websites for their parents' businesses, providing practical experience.",
      "Collaborating with students on projects where they create websites for their parents, who are businessmen, based on real business needs.",
      "Mentoring students in various web development technologies and helping them develop professional-level skills.",
      "Fostering a learning environment that bridges classroom theory with real-world application.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NBU",
    description:
      "Developed the frontend section of the NBU website, providing users with an intuitive and user-friendly interface to access financial services, enhancing overall customer experience and digital engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/farruxuzbekistan/nbu_bank",
  },
  {
    name: "Click",
    description:
      "Developed the frontend section of the Click website, delivering a seamless and responsive user interface to enhance the user experience for online payment and transaction services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/farruxuzbekistan/clickuz",
  },
  {
    name: "Modera Tower",
    description:
      "Developed the Modera Tour Multiple Page React app, creating a dynamic and interactive user experience for browsing and booking tours, with seamless navigation across multiple pages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/farruxuzbekistan/estate",
  },
  {
    name: "Ucell",
    description:
      "Developed the frontend section of the Ucell website using React, providing a seamless and responsive user interface to enhance customer interaction and digital services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ucell,
    source_code_link: "https://github.com/farruxuzbekistan/ucell",
  },
  {
    name: "Bosphorus",
    description:
      "Developed the Modera Tour Multiple Page React app, creating a dynamic and interactive user experience for browsing and booking tours, with seamless navigation across multiple pages.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "aiogram",
        color: "green-text-gradient",
      },
    ],
    image: bos,
    source_code_link: "https://t.me/bosphorus_family_bot",
  },
  {
    name: "Weather",
    description:
      "Developed the Modera Tour Multiple Page React app, creating a dynamic and interactive user experience for browsing and booking tours, with seamless navigation across multiple pages.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/farruxuzbekistan/weather",
  },
];

export { services, technologies, experiences, testimonials, projects };
