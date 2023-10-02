import {
  mobile,
  backend,
  web,
  javascript,
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
  laravel,
  vuejs,
  r2logics,
  vvlife,
  lunaz,
  moeving,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "JAVA SCRIPT",
    icon: javascript,
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
    name: "Laravek",
    icon: laravel,
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

const experiences = [
  {
    title: "React.js Developer",
    company_name: "R2Logics",
    icon: r2logics,
    iconBg: "#E6DEDD",
    date: "June 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "R2Logics",
  //   icon: shopify,
  //   iconBg: "#E6DEDD",
  //   date: "June 2022 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "R2Logics",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "VV Life",
    description:
      "Web-based and Mobile-based platform that allows User-centric asset management with CA integration and a user-friendly mobile app. Seamlessly manage assets, track financials, and plan for the future. Empower individuals to take control of their finances while offering CA professionals a robust tool for efficient financial planning and wealth management.",
    tags: [
      {
        name: "Vue JS",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap,CSS",
        color: "pink-text-gradient",
      },
    ],
    image: vvlife,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lunaz Moto",
    description:
      "Web-based and Mobile-based platform that allows The ultimate solution for cyclists. Track rides, analyze performance, and connect with a community of riders. Access maps, plan routes, and monitor fitness stats. Whether you're a casual rider or a pro, this app enhances your biking experience with valuable insights and social connectivity.",
    tags: [
      {
        name: "Vue JS",
        color: "blue-text-gradient",
      },
      {
        name: "LARAVEL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap,CSS",
        color: "pink-text-gradient",
      },
    ],
    image: lunaz,
    source_code_link: "https://github.com/",
  },
  {
    name: "MoEVing",
    description:
      "EV Vehicle Service App: Streamline electric vehicle ownership with this all-in-one platform. Schedule charging, locate charging stations, and monitor battery health. Get real-time diagnostics, maintenance alerts, and remote access. Whether you're a green enthusiast or a fleet manager, this app simplifies EV maintenance and ensures a smooth, eco-friendly ride.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: moeving,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
