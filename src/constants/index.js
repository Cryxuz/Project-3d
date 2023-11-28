import { dev, distinction, kinloch, cruise } from "../assets/images";
import {
    contact,
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

    // projects
    burger,
    donut,
    pawprint,
    contract,

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
            "Intense 15-week software development bootcamp.",
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
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
  {
    iconUrl: pawprint,
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
},
{
  iconUrl: burger,
  theme: 'btn-back-red',
  name: 'Amazon Price Tracker',
  description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
  link: 'https://github.com/adrianhajdin/pricewise',
},
{
  iconUrl: donut,
  theme: 'btn-back-red',
  name: 'Amazon Price Tracker',
  description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
  link: 'https://github.com/adrianhajdin/pricewise',
},
{
  iconUrl: contract,
  theme: 'btn-back-black',
  name: 'Amazon Price Tracker',
  description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
  link: 'https://github.com/adrianhajdin/pricewise',
},
];