const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Education",
    link: "#education",
  },
];

const words = [
  { text: "Ideas", imgPath: "/pictures/ideas.svg" },
  { text: "Concepts", imgPath: "/pictures/concepts.svg" },
  { text: "Designs", imgPath: "/pictures/designs.svg" },
  { text: "Code", imgPath: "/pictures/code.svg" },
  { text: "Ideas", imgPath: "/pictures/ideas.svg" },
  { text: "Concepts", imgPath: "/pictures/concepts.svg" },
  { text: "Designs", imgPath: "/pictures/designs.svg" },
  { text: "Code", imgPath: "/pictures/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Completed Projects" },
];

const abilities = [
  {
    imgPath: "/pictures/time.png",
    title: "Timely & Reliable",
    desc: "Delivering high-quality projects on time with consistent communication throughout.",
  },
  {
    imgPath: "/pictures/people.png",
    title: "Team-Oriented Mindset",
    desc: "Enjoys collaborating, learning, and contributing effectively in team environments.",
  },
  {
    imgPath: "/pictures/learning.png",
    title: "Always Learning",
    desc: "Driven by curiosity and constantly exploring new tools and technologies.",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/Models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/Models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/Models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Version Control",
    modelPath: "/Models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Rashin is a reliable and talented front-end developer. Always delivers high-quality work on time, communicates clearly, and is a pleasure to work with. Highly recommended!",
    logoPath: "/pictures/company.png",
    title: "Frontend Web Developer",
    date: "2018-2022",
    responsibilities: [
      "Developed and maintained company websites, admin dashboards, and internal portals using React",
      "Reviewed and refactored code to fix bugs, improve performance, and ensure stability.",
      "Implemented secure authentication, authorization, and RESTful APIs for departmental tools.",
      "Managed virtual servers and cloud hosting environments.",
    ],
  },
  {
    review:
      "Rashin made a strong impression during the internship—curious, dependable, and eager to grow. Brought great energy to the team and handled tasks with professionalism.",
    logoPath: "/pictures/company.png",
    title: "Internship - Web Developer",
    date: "2017-2018",
    responsibilities: [
      "Built and updated static pages using HTML, CSS, and JavaScript.",
      "Developed responsive navigation menus.",
      "Improved user experience with smooth animations and transitions.",
    ],
  },
];

const learningPath = [
  {
    name: "Master of Science",
    institute: "Islamic Azad University of Iran ",
    year: "09/2013 – 11/2015",
  },
  {
    name: "HTML and CSS",
    institute: "Faradars institute",
    year: "04/2016 – 06/2016",
  },
  {
    name: "JavaScript",
    institute: "Maktabkhone institute",
    year: "07/2016 – 11/2016",
  },
  {
    name: "Network+",
    institute: "Faradars institute",
    year: "08/2018 – 09/2018",
  },
  {
    name: "ICND1",
    institute: "Faradars institute",
    year: "09/2019 – 12/2019 ",
  },
  {
    name: "ICND2",
    institute: "Faradars institute ",
    year: "01/2020 – 03/2020 ",
  },
  {
    name: "React and Redux",
    institute: "Botostart institute ",
    year: "08/2021 – 12/2021",
  },
  {
    name: "Docker",
    institute: "Maktabkhone institute",
    year: "04/2022 – 05/2022 ",
  },
  {
    name: "TypeScript",
    institute: "Botostart institute ",
    year: "05/2023 – 07/2023 ",
  },
  {
    name: "Nextjs",
    institute: "Botostart institute",
    year: "01/2024 – 03/2024",
  },
  {
    name: "Electronjs",
    institute: "Sabzlearn institute",
    year: "11/2024 – 12/2024",
  },
  {
    name: "Nodejs and Express",
    institute: "Botostart institute",
    year: "01/2025 – 03/2025 ",
  },
];

const socialImgs = [
  {
    name: "git",
    url: "https://github.com/Rashin-Harisi",
    imgPath: "/pictures/github.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/rashin-harisi/",
    imgPath: "/pictures/linkedin.png",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  learningPath,
  socialImgs,
  techStackIcons,
  navLinks,
};
