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
  fullstack,
  fanta_card,
  naturalist_card,
  travel_card,
  react_practice,
  multi_chat,
  modern_dashboard,
  iphone17,
} from "../assets";
 
 import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
export const navLinks = [
  {
    id:"home",
    title:"Home",
  
  },
  {
    id: "about",
    title: "About",
   
  },

  {
    id: "work",
    title: "Work",
    
  },
  {
    id: "project",
    title: "Projects",
    
  },
  {
    id: "achievement",
    title: "Achievments",
    
  },
  {
    id: "askai",
    title: "Ask AI",
    isModal: true
  },
  {
    id: "contact",
    title: "Contact",
   
  },
];

const services = [
  {
    title:"PROGRAMMING IN C",
    link:"https://drive.google.com/file/d/1ku8K5cpyHtSa8ROUeoc95bM6MVcchv7s/view?usp=sharing",
    icon: web,
  },
  {
    title:"PROGRAMMING IN C++",
    link:"https://drive.google.com/file/d/1SL_zB5BciiJFfaYaJz28zATRHCJ60NSx/view?usp=sharing",
    icon: mobile,
  },
  {
    title:"MODERN APPLICATION DEVELOPMENT",
    link:"https://drive.google.com/file/d/1QrTVI0q8c2PJHF-etIuk_vhDkA6aK7CJ/view?usp=sharing",
    icon: backend,
  
  },
  {
    title:"Node JS",
    link:"https://drive.google.com/file/d/1mNGD4J76EL0pSzDsO8vT1Nlt3rZelkCj/view?usp=sharing",
    icon: creator,
  },
  {
    title:"Angular 8",
    link:"https://drive.google.com/file/d/1GKwTUVRmaT78tj21GlttImcaUNgt-EOx/view?usp=sharing",
    icon: web,
   
  },
  {
    title:"Python",
    link:"https://drive.google.com/file/d/1jUjrXri7kz_vhGXcLAiGmTjxkdoux-OH/view?usp=sharing",
    icon: mobile,

  }
  
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
    title: "Software Engineer",
    company_name: "Divami Design Labs Pvt. Ltd",
    icon: web,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    skills: ["React", "Angular", "Nest JS", "Next.js", "Node.js", "Material UI", "Tailwind CSS", "Python", "Data Analytics", "Gen AI"],
    points: [
      "Built and enhanced responsive, data-driven web interfaces using React, Angular, HTML, CSS, and JavaScript, improving overall user experience and page usability by ~30% across multiple client projects (Yuyiii, imPAC, RightData).",
      "Implemented modular and scalable UI styles using CSS frameworks and preprocessors (Bootstrap, Sass), reducing UI defects and rework by ~25%.",
      "Developed interactive dashboards and data visualization components (charts, dynamic views) for cloud security and data platforms, improving data discoverability and user insights by ~35%.",
      "Integrated frontend applications with backend APIs (PHP and service APIs), improving data fetch reliability and reducing UI data-related issues by ~20%.",
      "Implemented state management and component-level architecture in React-based applications, reducing unnecessary re-renders and improving UI performance by ~20–25%.",
      "Wrote and maintained unit tests for frontend components, increasing test coverage to ~70–80% and reducing production regressions by ~25%.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Blue Yonder | Jda(Panasonic)",
    icon: fullstack,
    iconBg: "#383E56",
    date: "June 2023 - December 2025",
    skills: ["React", "Socket", "PubSub", "Events", "Material UI", "CI/CD", "Git Flow", "RTL", "Jest", "WebdriverIO"],
    points: [
      "Engineered scalable enterprise dashboards using React (TypeScript), Redux, and modern UI libraries, improving vendor management workflows and real-time data visibility for business operations.",
      "Developed comprehensive End-to-End (E2E) test suites using WebdriverIO, achieving ~90% coverage of critical user flows and reducing regression defects by ~30%.",
      "Led the migration from MUI v4 to MUI v5, improving component performance and UI consistency by ~25%; refactored and expanded unit tests using Jest and React Testing Library (RTL) to improve coverage, reliability, and maintainability.",
      "Worked on the frontend/UI of an existing AI agent–driven application using React, enhancing interfaces that integrate intelligent assistants for workflow automation, recommendations, and contextual actions.",
      "Contributed to an existing micro-frontend–based UI platform, building and enhancing features across multiple independently deployed frontend modules.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "SitaraFoods.com",
    icon: mobile,
    iconBg: "#383E56",
    date: "July 2021 - February 2022",
    points: [
      "Built e-commerce platform features including product catalog, shopping cart, and payment integration.",
      "Developed mobile-responsive web applications ensuring cross-browser compatibility.",
      "Optimized application performance and implemented caching strategies to improve load times.",
      "Collaborated with cross-functional teams to gather requirements and deliver customer-focused solutions.",
    ],
  },
];

export const javaProject = [
  {
    name: "Cryptography",
    description:
      "The project is based on a cryptography technique that uses Double layer encryption and decryption using Armstrong numbers and RGB color-based mappings for various types of file format. The idea is inspired from a research paper.",
    tags: [
      {
        name: "cryptography",
        color: "blue-text-gradient",
      },
      {
        name: "security",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Cryptography",
    source_code_link: "https://github.com/shinchancode/Cryptography",
  },
  {
    name: "Snake Yaml",
    description:
      "Created a simple Maven project, a YAML file and write student data in it. As the request is made, crud should be performed in real time . (Hint: Used SnakeYAML library and add dependency in pom)",
    tags: [
      {
        name: "yaml",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "postman",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Snake-Yaml-Project",
    source_code_link: "https://github.com/shinchancode/Snake-Yaml-Project",
  },
  {
    name: "CRUD operations",
    description:
      "Built a java based application to allow user to create, read, update and delete Entities. Spring Boot provides an interface called CrudRepository that contains methods for CRUD operations.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "crud",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/CRUD-Operation",
    source_code_link: "https://github.com/shinchancode/CRUD-Operation",
  },
  {
    name: "Byte-Array-to-File",
    description:
      "Built a java project where we input a file using byte array, store it on local system. In order to convert a byte array to a file, we will be using a method named the getBytes() method of String class.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "byteArray",
        color: "green-text-gradient",
      },
      {
        name: "file",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/byte-array-to-file",
    source_code_link: "https://github.com/shinchancode/byte-array-to-file",
  },
  {
    name: "Spring Boot One To Many",
    description:
      "Implemented Spring Boot One-To-Many mapping with Hibernate in a Spring Boot CRUD using @OnetoMany annotation. Mapping between two entities and used a MySQL database to store and retrieve the data.",
    tags: [
      {
        name: "onetomany",
        color: "blue-text-gradient",
      },
      {
        name: "springbott",
        color: "green-text-gradient",
      },
      {
        name: "crud",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/oneTomany-springboot",
    source_code_link: "https://github.com/shinchancode/oneTomany-springboot",
  },
  {
    name: "OOP Lab",
    description:
      "These projects contain object oriented programming primary concepts and its code in Java language. Topics like : Inheritence, Constructor, Virtual function, Interface, Exception Handling, Generic Programming and File Handling etc.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "coding",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
    source_code_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
  },
];

export const cProject = [
  {
    name: "Spell Checker",
    description:
      "Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "trie",
        color: "green-text-gradient",
      },
      {
        name: "dictionary",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Trie-Data-structure",
    source_code_link: "https://github.com/shinchancode/Trie-Data-structure",
  },
  {
    name: "DSA Lab",
    description:
      "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
    tags: [
      {
        name: "DSA",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
    source_code_link: "https://github.com/shinchancode/Data-Structure-Algorithms/",
  },
  {
    name: "Computer Graphics Lab",
    description:
      "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
    tags: [
      {
        name: "computergraphics",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Computer-Graphics",
    source_code_link: "https://github.com/shinchancode/Computer-Graphics",
  },
  
];

export const webProject = [
  {
    name: "3D React Portfolio",
    description:
      "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
    tags: [
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "3d_react",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://shinchancode.github.io/3d-react-portfolio/",
    source_code_link: "https://github.com/shinchancode/3d-react-portfolio",
  },
  {
    name: "React portfolio",
    description:
      "Website made using React in the FrontEnd, Nodejs and Express in the BackEnd. Responsive webpage is made with user friendly interface",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "html css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://shinchancode.github.io/React-Portfolio/",
    source_code_link: "https://github.com/shinchancode/React-Portfolio",
  },
  {
    name: "30 Days of JavaScript",
    description:
      "Website made using Nodejs and Express in the BackEnd. A 30 Days Of JavaScript challenge to learn JavaScript by making 30 different projects using some famous JavaScript libraries.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "30dayschallenge",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://rathi-30-days-of-javascript.onrender.com/",
    source_code_link: "https://github.com/shinchancode/30-Days-of-Javascript",
  },
  {
    name: "Chit Chat Application",
    description:
      "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
    tags: [
      {
        name: "Chatting",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://chit-chat-app.onrender.com/",
    source_code_link: "https://github.com/shinchancode/Chit-Chat-Real_time_chat_app",
  },
  {
    name: "Notes Application",
    description:
      "A web-based notes app made by using javaScript, This web-based notes app having functionalities like Drag and drop, Search notes etc.",
    tags: [
      {
        name: "notes",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://shinchancode.github.io/Notes-App/",
    source_code_link: "https://github.com/shinchancode/Notes-App",
  },
];

const list = [
  {
    id: "java",
    title: "Java",
  },
  {
    id: "c++",
    title: "C++",
  },
  {
    id: "web",
    title: "Web Dev",
  },
  {
    id: "other",
    title: "Other",
  },
];
export const otherProject = [
  {
    name: "Multilingual Multiple Choice Question Generation",
    description:
      "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "multilingual",
        color: "green-text-gradient",
      },
      {
        name: "BE_Project",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
    source_code_link: "https://github.com/shinchancode/Final-Year-Project",
  },

  {
    name: "DBMS Lab",
    description:
      "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
    tags: [
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "dbms",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
  },
  {
    name: "SQL : Library Management System",
    description:
      "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "management",
        color: "green-text-gradient",
      },
      {
        name: "miniproject",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
    source_code_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
  },
  {
    name: "Pyhton : Snake and Ladder",
    description:
      "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
    tags: [
      {
        name: "snake and ladder",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
    source_code_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
  },
  
];

const testimonials = [
  {
    testimonial:
      "Balendra is an exceptional engineer who consistently delivers high-quality features ahead of schedule. His ability to quickly debug complex issues and turn them into solutions is remarkable. He's been instrumental in accelerating our development velocity at Divami.",
    name: "Venkat",
    designation: "Engineering Head",
    company: "Divami Design Labs Pvt. Ltd",
    image: "https://ui-avatars.com/api/?name=Venkat&background=915EFF&color=fff&size=128",
  },
  {
    testimonial:
      "Working with Balendra has been a fantastic experience. His technical expertise combined with rapid feature delivery makes him stand out. He debugs issues with incredible speed and always maintains clean, maintainable code. A true asset to any engineering team.",
    name: "Vaibhav Singh",
    designation: "Staff Engineer",
    company: "Blue Yonder | Jda(Panasonic)",
    image: "https://ui-avatars.com/api/?name=Vaibhav+Singh&background=915EFF&color=fff&size=128",
  },
  {
    testimonial:
      "Balendra's dedication to quality and speed is unmatched. He consistently delivers complex features on time while maintaining high code standards. His quick problem-solving skills and collaborative approach have significantly improved our team's productivity at Blue Yonder.",
    name: "Sonakshi",
    designation: "Senior Software Engineer",
    company: "Blue Yonder | Jda(Panasonic)",
    image: "https://ui-avatars.com/api/?name=Sonakshi&background=915EFF&color=fff&size=128",
  },
];

const projects = [
  {
    name: "Animated Fanta Landing Page",
    description:
      "A visually appealing landing page for a Fanta-themed website, built with Three.js and GSAP. Features 3D animations, smooth transitions, and a fully responsive, interactive UI.",
    tags: [
      { name: "threejs", color: "blue-text-gradient" },
      { name: "gsap", color: "green-text-gradient" },
      { name: "html", color: "pink-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: fanta_card, // You can update this to a custom screenshot if available
    source_code_link: "https://github.com/bala9424/Fanta",
    live_link: "https://myfanta.netlify.app/",
    details: `\n# Animated Fanta Landing Page\n\nWelcome to the **Animated Fanta Landing Page**! This project is a visually appealing landing page designed for a Fanta-themed website, built using **Three.js**, **GSAP**, **HTML**, and **CSS**.\n\n## 🚀 Features\n- **3D Animations** with Three.js 🎥\n- **Smooth Animations** powered by GSAP ✨\n- **Fully Responsive** design 📱💻\n- **Interactive UI** for an immersive experience 🍊\n\n## 🛠️ Technologies Used\n- [Three.js](https://threejs.org/) - JavaScript 3D Library\n- [GSAP](https://greensock.com/gsap/) - Animation Library\n- HTML5 & CSS3 - Structure and Styling\n\n## 🎬 Demo\nCheck out the live demo: [Live Demo](https://myfanta.netlify.app/)\n\n## 🏗️ Installation & Usage\n1. Clone this repository:\n   git clone https://github.com/bala9424/Fanta.git\n2. Navigate to the project folder:\n   cd Fanta\n3. Open index.html in your browser or use a local server.\n\n## 🤝 Contributing\nFeel free to fork this repository and submit pull requests. Any contributions to improve the project are welcome!\n`,
  },
  {
    name: "Animated Naturalist Chocolate Can Landing Page",
    description:
      "A visually appealing landing page for a chocolate-themed website, built with Three.js and GSAP. Features 3D animations, smooth transitions, and a fully responsive, interactive UI.",
    tags: [
      { name: "threejs", color: "blue-text-gradient" },
      { name: "gsap", color: "green-text-gradient" },
      { name: "html", color: "pink-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: naturalist_card, // You can update this to a custom screenshot if available
    source_code_link: "https://github.com/bala9424/naturalist_landing_page",
    live_link: "https://mynaturalist.netlify.app/",
    details: `\n# Animated Naturalist Chocolate Can Landing Page\n\nWelcome to the **Animated Naturalist Chocolate Can Landing Page**! This project is a visually appealing landing page designed for a chocolate-themed website, built using **Three.js**, **GSAP**, **HTML**, and **CSS**.\n\n## 🚀 Features\n- **3D Animations** with Three.js 🎥\n- **Smooth Animations** powered by GSAP ✨\n- **Fully Responsive** design 📱💻\n- **Interactive UI** for an immersive experience 🍫\n\n## 🛠️ Technologies Used\n- [Three.js](https://threejs.org/) - JavaScript 3D Library\n- [GSAP](https://greensock.com/gsap/) - Animation Library\n- HTML5 & CSS3 - Structure and Styling\n\n## 🎬 Demo\nCheck out the live demo: [Live Demo](https://mynaturalist.netlify.app/)\n\n## 🏗️ Installation & Usage\n1. Clone this repository:\n   git clone https://github.com/bala9424/naturalist_landing_page.git\n2. Navigate to the project folder:\n   cd naturalist_landing_page\n3. Open index.html in your browser or use a local server.\n\n## 🤝 Contributing\nFeel free to fork this repository and submit pull requests. Any contributions to improve the project are welcome!\n`,
  },
  {
    name: "Animated Travel Landing Page",
    description:
      "A visually appealing landing page for travel websites, built with Three.js and GSAP. Features 3D animations, smooth transitions, and a fully responsive, interactive UI.",
    tags: [
      { name: "threejs", color: "blue-text-gradient" },
      { name: "gsap", color: "green-text-gradient" },
      { name: "html", color: "pink-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
    ],
    image: travel_card,
    source_code_link: "https://github.com/bala9424/Travel_Landing_page_gsap",
    live_link: "https://balendratravel.netlify.app/",
    details: `\n# Animated Travel Landing Page\n\nWelcome to the **Animated Travel Landing Page**! This project is a visually appealing landing page designed for travel-related websites, built using **Three.js**, **GSAP**, **HTML**, and **CSS**.\n\n## 🚀 Features\n- **3D Animations** with Three.js 🎥\n- **Smooth Animations** powered by GSAP ✨\n- **Fully Responsive** design 📱💻\n- **Interactive UI** for an immersive experience 🏝️\n\n## 🛠️ Technologies Used\n- [Three.js](https://threejs.org/) - JavaScript 3D Library\n- [GSAP](https://greensock.com/gsap/) - Animation Library\n- HTML5 & CSS3 - Structure and Styling\n\n## 📷 Preview\n\n![image](https://github.com/user-attachments/assets/72e00263-0597-4587-9070-f144b1fcb57c)\n\n## 🎬 Demo\nCheck out the live demo: [Live Demo](https://balendratravel.netlify.app/)\n\n## 🏗️ Installation & Usage\n1. Clone this repository:\n   git clone https://github.com/your-username/animated-travel-landing.git\n2. Navigate to the project folder:\n   cd animated-travel-landing\n3. Open index.html in your browser or use a local server.\n\n## 📁 Project Structure\n\nanimated-travel-landing/\n│-- index.html      # Main HTML file\n│-- style.css       # Stylesheet\n│-- script.js       # JavaScript file for animations\n│-- assets/         # Images and 3D models\n│-- README.md       # Project documentation\n\n## 🤝 Contributing\nFeel free to fork this repository and submit pull requests. Any contributions to improve the project are welcome!\n`,
  },
  {
    name: "React Practice Projects",
    description:
      "A comprehensive collection of essential React projects including Todo App, Weather App, Pagination, Table & Search, Form & CRUD, Multi-Step Form, Star Rating, and more. Perfect for mastering React fundamentals and state management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "api", color: "pink-text-gradient" },
    ],
    image: react_practice,
    source_code_link: "https://github.com/bala9424/Machine-round",
    live_link: "https://react-machine-round-project.netlify.app/",
    details: `\n# React Practice Projects 🚀\n\nA collection of essential React applications built to master core concepts and modern development practices.\n\n## 📂 Included Projects\n- **Todo App**: Task management with LocalStorage 📝\n- **Weather App**: Real-time API fetching practice ☁️\n- **Pagination**: Efficient data slicing and navigation 🔢\n- **Table & Search**: Dynamic filtering and debouncing 🔍\n- **Form & CRUD**: Comprehensive API, Validation & CRUD operations 📝\n- **Multi-Step Form**: Wizard-style complex form logic 🧙‍♂️\n- **Star Rating**: Interactive component design practice ⭐\n- **Counter App**: Basic state management fundamentals 🔢\n\n## 🛠️ Technologies Used\n- **React.js**\n- **Tailwind CSS**\n- **Fetch / Axios (API calls)**\n- **LocalStorage**\n\n## 🎬 Demo\nCheck out the live dashboard: [Live Demo](https://react-machine-round-project.netlify.app/)\n`,
  },
  {
    name: "Real-Time Multi-User Chat",
    description:
      "A sophisticated real-time chat application built with React and WebSockets. Features instant messaging, user presence tracking, community rules, and a clean, modern UI optimized for multi-user interaction.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "websockets", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
      { name: "express", color: "orange-text-gradient" },
    ],
    image: multi_chat,
    source_code_link: "https://github.com/bala9424/MultiUserChatWEbsite",
    live_link: "https://chatusain.netlify.app/",
    details: `\n# Real-Time Multi-User Chat 💬\n\nWelcome to the **Real-Time Multi-User Chat Website**! This project is a modern communication platform that enables users to connect and chat in real-time using **WebSockets**.\n\n## 🚀 Key Features\n- **Real-Time Messaging**: Built with WebSockets for instant communication ⚡\n- **User Discovery**: Find and chat with other online users 👥\n- **Presence Management**: Real-time tracking of online/offline status 🟢\n- **Clean UI**: Modern, dark-themed interface with intuitive navigation 🎨\n- **Community Rules**: Built-in safety and respect guidelines for a positive environment 🛡️\n\n## 🛠️ Technologies Used\n- **Frontend**: React.js, Tailwind CSS\n- **Backend**: Node.js, Express.js\n- **Communication**: WebSockets (Socket.io)\n- **Deployment**: Netlify / Render\n\n## 🎬 Live Demo\nExperience the real-time chat: [Chatusain Live Demo](https://chatusain.netlify.app/)\n\n## 🏗️ Getting Started\n1. Clone the repository:\n   git clone https://github.com/bala9424/MultiUserChatWEbsite.git\n2. Install client dependencies:\n   cd MultiUserChatWEbsite/client && npm install\n3. Install server dependencies:\n   cd ../server && npm install\n4. Start development build.\n`,
  },
  {
    name: "QuantumDash - GSAP Animated Dashboard",
    description:
      "A high-performance, visually stunning modern dashboard built with React and GSAP. Features smooth animations, real-time-like data visualizations (Velocity Performance, Core Utilization), dark mode, and a highly responsive, premium UI design.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "gsap", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "recharts", color: "orange-text-gradient" },
    ],
    image: modern_dashboard,
    source_code_link: "https://github.com/bala9424/modern-dashboard",
    live_link: "https://dashboard-gsap.netlify.app/",
    details: `\n# QuantumDash - GSAP Animated Dashboard 🚀\n\nA cutting-edge dashboard interface that combines advanced animation techniques with professional data organization. Built for performance and aesthetics.\n\n## ✨ Features\n- **Micro-Animations**: Powered by GSAP for a fluid, premium user experience 🪄\n- **Data Visualization**: Interactive charts for Velocity Performance and Core Utilization 📊\n- **Modern UI**: Sleek, professional interface with Quantum-themed branding 🎨\n- **Dark Mode Support**: Seamlessly switch between light and dark themes 🌓\n- **Responsive Design**: Flawless experience across desktops, tablets, and phones 📱\n\n## 🛠️ Technologies Used\n- **React.js**\n- **GSAP** (GreenSock Animation Platform)\n- **Tailwind CSS**\n- **Lucide React** (Icons)\n- **Recharts** (Data Visualization)\n\n## 🎬 Live Demo\nCheck out the live dashboard: [QuantumDash Live Demo](https://dashboard-gsap.netlify.app/)\n\n## 🏗️ Installation & Usage\n1. Clone the repository:\n   git clone https://github.com/bala9424/modern-dashboard.git\n2. Install dependencies:\n   npm install\n3. Start the dev server:\n   npm run dev\n`,
  },
  {
    name: "iPhone 17 Pro - Apple Style Website",
    description:
      "A stunning, highly interactive clone of the Apple iPhone 17 Pro landing page. Built with React, GSAP, and Three.js, it features smooth scroll-triggered animations, premium 3D models, and a sleek, modern UI that replicates the authentic Apple experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "gsap", color: "green-text-gradient" },
      { name: "threejs", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],
    image: iphone17,
    source_code_link: "https://github.com/bala9424/Iphone17",
    live_link: "https://balu-iphone-17.netlify.app/",
    details: `\n# iPhone 17 Pro - Apple Style Website 📱✨\n\nWelcome to the **iPhone 17 Pro Landing Page Clone**! This project is a visually stunning, high-performance website that replicates the premium Apple experience through advanced web technologies.\n\n## 🚀 Key Features\n- **GSAP Animations**: Fluid scroll-triggered animations and transitions for an immersive feel 🪄\n- **3D Interactive Models**: Integrated high-quality 3D views of the iPhone (using Three.js) 🎥\n- **Smooth Scrolling**: Lenis smooth scroll for a seamless browsing experience ✨\n- **Apple Aesthetics**: Meticulously crafted UI following Apple's design language 🎨\n- **Fully Responsive**: Optimized for all devices, from mobile to ultra-wide monitors 📱💻\n\n## 🛠️ Technologies Used\n- **React.js**\n- **GSAP** (GreenSock Animation Platform)\n- **Three.js** (3D Rendering)\n- **Tailwind CSS**\n- **Vite** (Build Tool)\n\n## 🎬 Live Demo\nExperience the stunning visuals here: [iPhone 17 Pro Live Demo](https://balu-iphone-17.netlify.app/)\n\n## 🏗️ Installation & Usage\n1. Clone the repository:\n   git clone https://github.com/bala9424/Iphone17.git\n2. Install dependencies:\n   npm install\n3. Run the development server:\n   npm run dev\n`,
  }
];

const achievements = [
  {
    title: "Completed multiple certification training programs from NPTEL and NareshIT in web technologies, including React, Node.js, Angular, C, C++, and Modern Application Development.",
    isHtml: false
  },
  {
    title: "Received <span class='text-yellow-400 font-bold'>🏆 'Pat on the Back'</span> award in my first year at Divami for <span class='text-green-400 font-semibold'>outstanding performance</span>.",
    isHtml: true
  },
  {
    title: "Awarded <span class='text-pink-400 font-bold'>⭐ 'Shining Star'</span> in my second year at Divami in recognition of my <span class='text-purple-400 font-semibold'>contributions</span>.",
    isHtml: true
  },
];


export { services, technologies, experiences, testimonials, projects,list,achievements };
