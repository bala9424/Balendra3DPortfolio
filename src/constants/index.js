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
    title: "Senior Software Engineer",
    company_name: "Blue Yonder",
    icon: fullstack,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Leading development of enterprise-level supply chain management solutions using React.js and Node.js.",
      "Architecting and implementing scalable microservices architecture for warehouse management systems.",
      "Implemented comprehensive unit testing using Jest and React Testing Library to ensure code quality and reliability.",
      "Established Git workflow best practices including branch strategies, pull request reviews, and CI/CD pipelines.",
      "Developed automated end-to-end testing solutions using WebDriver and Selenium for regression testing.",
      "Mentoring junior developers and conducting code reviews to maintain high code quality standards.",
      "Collaborating with product teams across multiple time zones to deliver critical features on time.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Divami",
    icon: web,
    iconBg: "#E6DEDD",
    date: "March 2022 - May 2023",
    points: [
      "Developed and maintained responsive web applications using React.js, Angular, and Node.js.",
      "Implemented RESTful APIs and integrated third-party services to enhance application functionality.",
      "Worked closely with UI/UX designers to implement pixel-perfect designs and smooth user experiences.",
      "Participated in agile development processes including sprint planning, daily standups, and retrospectives.",
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
    company: "Divami",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "Working with Balendra has been a fantastic experience. His technical expertise combined with rapid feature delivery makes him stand out. He debugs issues with incredible speed and always maintains clean, maintainable code. A true asset to any engineering team.",
    name: "Vaibhav",
    designation: "Staff Engineer",
    company: "Blue Yonder",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial:
      "Balendra's dedication to quality and speed is unmatched. He consistently delivers complex features on time while maintaining high code standards. His quick problem-solving skills and collaborative approach have significantly improved our team's productivity at Blue Yonder.",
    name: "Sonakshi",
    designation: "Senior Software Engineer",
    company: "Blue Yonder",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
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
