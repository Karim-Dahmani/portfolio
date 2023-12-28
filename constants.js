export const METADATA = {
  author: "Mohammed Karim Dahmani",
  title: "Portfolio | Mohammed Karim Dahmani",
  description:
    "Mohammed Karim Dahmani is a Full-Stack Developer from Morocco, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.mohammedkarimdahmani.me/",
  twitterHandle: "",
  keywords: [
    "Mohammed Karim Dahmani",
    "Full-Stack Developer",
    "Web Developer",
    "Spring Boot Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full-Stack Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: dahmanimohammedkarim@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mohammed-karim-dahmani-b532b41b2/",
  },
  {
    name: "github",
    url: "https://github.com/Karim-Dahmani",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/kaarimdahmani/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    // "cpp",
    "java",
    // "python",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    // "moralis",
    // "stripe",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "angular",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "spring-boot",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "E-Banking",
    image: "/projects/.webp",
    blurImage: "/projects/.webp",
      description: "E-Banking Full stack project  using Angular + Tailwind CSS + Spring Boot 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/Karim-Dahmani/E-Banking-Angular",
    tech: ["angular", "spring-boot", "tailwindcss", "mapbox"],
  },
  {
    name: "Assurance Project",
    image: "/projects/Cat.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Full stack project  using Angular  + Spring Boot 🛏 ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "",
    tech: ["typescript", "angular", "nextjs", "spring-boot", "sanity.io"],
  },
  {
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/Karim-Dahmani/inshorts",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/Karim-Dahmani/tesla",
    tech: ["react"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "CAT",
    title: "Full-Stack Developer",
    location: "Casablanca, Morocco",
    range: "July - September 2023",
    responsibilities: [
      "Led creation of a captivating cross-platform e-commerce solution.",
      "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
      "The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
    ],
    url: "https://cat.co.ma/",
    video: "/work/CAT.mp4",
  },
  {
    id: 2,
    company: "SQLI",
    title: "NodeJs Developer Intern",
    location: "Oujda , Morocco",
    range: "July - August 2022",
    responsibilities: [
      "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
      "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://www.sqli.com",
    video: "/work/SQLI.mp4",
  },
  {
    id: 3,
    company: "FCPO",
    title: "Php Developer Intern",
    location: "Oujda , Morocco",
    range: "March - april 2021",
    responsibilities: [
      "Led the Full Stack revamp on the Admin Portal.",
      "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
      "Implemented CRUD features for all the services and providers.",
    ],
    url: "https://fcpo.com/",
    video: "/work/FCPO.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
