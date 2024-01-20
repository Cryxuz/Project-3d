import { dev, distinction, kinloch, cruise } from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nodejs,
    react,
    tailwindcss,
    typescript,
    sql,
    
    // projects
    p,
    contract,
    donut,
    pawprint,
    
   

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
      imageUrl: sql,
      name: "SQLite",
      type: "Database",
  },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Developer Student",
        company_name: "Dev Academy Aotearoa",
        icon: dev,
        iconBg: "#accbe1",
        date: "June 2023 - October 2023",
        points: [
            "Intense 15-week full immersion software development bootcamp that mimics a real-life development team as closely as possible.",
            "Developing web applications using SQLite, Express.js, React.js Node.js, Typescript, HTML5, CSS, and other related technologies.",
            "Collaborating with other developer students to create high-quality products and finish exercises.",
            "Implementing responsive design, authentication, authorization and security.",
            "Participating in code reviews and providing constructive feedback to other developer students.",
        ],
    },
    {
        title: "Chef De Partie",
        company_name: "Distinction",
        icon: distinction,
        iconBg: "#F3E9E2",
        date: "July 2020 - March 2023",
        points: [
            "Collaborating with daily kitchen operations to ensure seamless service.",
            "Developed proficiency in a variety of cooking styles and cuisines.",
            "Participated in the creation and execution of innovative dishes.",
            "Actively supported the training and development of junior culinary team members.",
        ],
    },
    {
        title: "Demi Chef",
        company_name: "Kinloch Manor and Villas",
        icon: kinloch,
        iconBg: "#9BC4CB",
        date: "December 2019 - June 2020",
        points: [
            "Significantly enhanced the dining experience through culinary creativity and precision, embodying the essence of gastronomy.",
            "Making sure to finish mise en place on time.",
            "Baking merges precise measurements and timing to craft delightful desserts from simple ingredients.",
            "Artful plating is a visual masterpiece, balancing colors and textures for a memorable culinary experience.",
        ],
    },
    {
      title: "Commis Chef",
      company_name: "Lakeland Queen Cruise",
      icon: cruise,
      iconBg: "#CEEAF7",
      date: "October 2017 - December 2019",
      points: [
          "Meticulous organization and precise mise en place ensure seamless kitchen workflows..",
          "Upheld unwavering standards, ensuring consistently high food quality..",
          "Skillfully catered to a variety of dietary needs with seamless proficiency..",
      ],
  },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Cryxuz',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/paul-david-tan-28b003266/',
    }
];

export const projects = [
{
  iconUrl: p,
  theme: 'btn-back-green',
  name: 'Personal Website',
  description: 'Personal 3D website using Three.js, showcasing my projects and providing a brief introduction about me.',
  link: 'https://paul-tan.com/',
  github_link: 'https://github.com/Cryxuz/Project-3d',
},
{
  iconUrl: contract,
  theme: 'btn-back-pink',
  name: "To-do List",
  description: 'A simple To-do list project from dev academy.',
  github_link: 'https://github.com/Cryxuz/Dev-Academy-to-do-list',
  // vid: 'https://youtu.be/BB0DU4DoPP4?list=RDBB0DU4DoPP4'
  vid: 'https://www.youtube.com/embed/i_5pt4FbzTk'
},
{
  iconUrl: pawprint,
  theme: 'btn-back-red',
  name: 'Tailored Tails',
  description: 'An e-commerce website selling pet costumes, built with the MERN (MongoDB, Express, React, Node) stack  and incorporating Redux and Tailwind CSS. JWT-token for authentication and authorization, bcrypt for hashing the user passwords and Stripe for managing payments.',
  link: 'https://tailored-tails.onrender.com/',
  github_link: 'https://github.com/Cryxuz/Project-Tailored-Tails-Fullstack'
},
{
  iconUrl: donut,
  theme: 'btn-back-blue',
  name: "Tiff's Donuts",
  description: 'Final group project at Dev Academy, this project is more focused on learning how to use Three.js.',
  github_link: 'https://github.com/Cryxuz/Dev-Academy-Final-Project'
},
];