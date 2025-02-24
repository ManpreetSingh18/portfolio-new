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
  tavpe,
  physeria,
  shoewebsite,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend Development",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Generative AI",
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // ,
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "MCA",
    company_name: "BVICAM",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023 -  2025",
    points: [
      "Secured 90% till now.",
      "Contributed to open-source through GirlScript Summer of Code 2024, achieving 62nd rank.",
      "Earned Postman API Fundamentals Student Expert certification.",
      "Worked on projects like TavPe (Loan Aggregator) and PrepAI (Next.js, Prisma, Clerk, Inngest).",
      "Actively learning Next.js, AI/ML, and exploring DeepSeek API for innovative solutions.",
    ],
  },
  {
    title: "B.Sc (Hons) Computer Science",
    company_name: "SGTB Khalsa College, DU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    points: [
      "Secured 74% overall.",
      "Hosted events with Curiex Computer Scientely society.",
      "Achieved 3rd rank in an inter-college competition at Delhi University.",
      "Developed a COVID-19 Cases Tracker website during the pandemic.",
    ],
  },
  {
    title: "12th",
    company_name: "S.D Public School",
    icon: shopify,
    iconBg: "#383E56",
    date: "2018 - 2019",
    points: [
      "Secured 89% with PCM (Physics, Chemistry, Mathematics) as core subjects.",
      "Actively participated in various school events.",
    ],
  },
  {
    title: "10th",
    company_name: "S.D Public School",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2016 - 2017",
    points: [
      "Secured 95% and was awarded for academic excellence.",
      "Achieved 2nd position in Science Quiz at the district-level competition.",
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
    name: "TavPe",
    description:
      "Developed a Loan Aggregator website where users can apply for loans, calculate EMIs, and verify via Firebase OTP authentication. Built an Admin Panel for loan tracking with secure login/signup. Deployed the frontend on Vercel and backend on Render at tavpe.in.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tavpe,
    source_code_link: "https://www.tavpe.in/",
  },
  {
    name: "Physeria",
    description:
      " Created an experiment-based application enabling users to input parameters, generate graphical analyses, and export data as PDFs. Implemented user authentication. Code on GitHub and Deploy at  Render ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: physeria,
    source_code_link: "https://github.com/ManpreetSingh18/physeria_full",
  },
  {
    name: "ShoeX",
    description:
      "A modern and visually appealing landing page showcasing the latest footwear collections with smooth animations and an intuitive user experience.",
    tags: [
      {
        name: "tailwind",
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
    image: shoewebsite,
    source_code_link: "https://shoes-msd.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
