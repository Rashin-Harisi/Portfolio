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
    imgPath: "/pictures/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/pictures/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/pictures/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
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
    name: "Python Developer",
    modelPath: "/Models/python-transformed.glb",
    scale: 0.8,
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
    name: "Project Manager",
    modelPath: "/Models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/pictures/exp1.png",
    logoPath: "/pictures/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/pictures/exp2.png",
    logoPath: "/pictures/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/pictures/exp3.png",
    logoPath: "/pictures/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
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
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/pictures/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/pictures/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/pictures/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
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
