import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import Sociomee from '../src/Components/image/Sociomee.png'
import Qr from '../src/Components/image/Qr.png'
import N from '../src/Components/image/N.png'
import p from '../src/Components/image/p.jpg'
import a from '../src/Components/image/a.jpg'
import l from '../src/Components/image/l.jpeg'
import smd from '../src/smd.jpg'
const Info = {
    name: "Kirti Pandey",
    stack: ["Software Engineer", "Frontend Developer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, that exceed client expectations. Let's connect and create something amazing together!"
}
const ProjectInfo = [
    {
        title: "Sociomee",
        desc: "Sociomee is a cutting-edge social networking platform developed using React.js, aimed at delivering a fluid and engaging user experience. The platform features real-time updates, allowing users to interact with posts, comments, and likes instantly. With customizable profiles and a dynamic news feed, Sociomee offers a personalized and interactive space for users to connect and share content. Its responsive design ensures a seamless experience across all devices, from desktops to smartphones. The application utilizes React's state management and routing capabilities for efficient data handling and smooth navigation. Sociomee stands out for its user-centric design and real-time functionality, showcasing the power of React in building modern web applications.",
        image: Sociomee,
        // live: true,
        technologies: ["React Js", "Tailwind", "Redux","Bootstrap"],
    },
    {
        title: "InstantQr",
        desc: "The Instant QR Code Generator website, developed using React.js, offers users a quick and intuitive way to create QR codes for various purposes. The application features a user-friendly interface where users can enter text, URLs, or other data to generate QR codes instantly. React's component-based architecture ensures a responsive and efficient experience, allowing for real-time generation and customization of QR codes. Users can adjust the size, color, and format of the QR codes, and download or share them directly from the platform. The site’s design emphasizes simplicity and speed, making it easy for users to generate and utilize QR codes for personal or professional use.",
        image: Qr,
       technologies: ["React Js", "Css", "MongoDB","Node Js","Bootstrap", "React-Strap"],
    },
    {
        title: "Ngo Website",
        desc: "NGO website, crafted with React.js, provides a comprehensive and engaging platform for non-profit organizations to connect with supporters, donors, and volunteers. The site features a clean and responsive design, ensuring an optimal experience across all devices. Key functionalities include detailed information about the NGO’s mission, ongoing projects, and events, along with easy-to-use donation and volunteer sign-up forms. React's component-based structure enhances performance and scalability, allowing for dynamic content updates and smooth navigation. With integrated social media links and interactive elements, the website effectively raises awareness and fosters community involvement.",
        image:N,
        technologies: ["React Js", "Bootstrap", "Css", "Node Js", "MongoDB"],
    },
    {
        title: "D-Mart Mobile Application ",
        desc: "Dmart mobile application is a versatile and user-friendly e-commerce platform developed using React Native, designed to bring the convenience of shopping to users’ fingertips. The app offers a seamless browsing experience with features like product search, category browsing, and personalized recommendations. Users can effortlessly add items to their cart, manage their orders, and track deliveries in real-time. React Native's cross-platform capabilities ensure that the app runs smoothly on both iOS and Android devices, providing a consistent and responsive experience. With efficient state management and intuitive navigation, the Dmart app enhances the shopping experience by making it accessible, fast, and engaging, all within a sleek, modern interface.",
        image: p,
    
        technologies: ["React Native", "Css", "GraphQl"],
        
    },
    {
        title: "Lexis 360 Mobile Application",
        desc: "Lexis 360 is a comprehensive mobile application developed using React Native, designed to provide users with a seamless and interactive platform for legal research and document management. The app offers a robust search engine for accessing a vast database of legal documents, case laws, and statutes. With features like offline access, personalized bookmarks, and real-time updates, Lexis 360 ensures that legal professionals can work efficiently, even on the go. React Native's cross-platform capabilities allow the app to deliver a consistent user experience across both iOS and Android devices. The app’s intuitive interface and responsive design make legal research faster, more accessible, and user-friendly.",
        image: l,
        
        technologies: ["React Native", "Css", "GraphQl"],
        
    },
    {
        title: "Av-Meditech Mobile Application",
        desc: "Av Meditech is a sophisticated healthcare platform designed to streamline medical services and patient management. Developed with React.js, the application offers a user-friendly interface for both healthcare professionals and patients. The platform features real-time appointment scheduling, electronic health records management, and secure communication channels. React's robust state management ensures smooth data handling and efficient performance, while its responsive design guarantees accessibility across all devices. With advanced features like automated reminders and analytics dashboards, Av Meditech enhances the efficiency of healthcare delivery and improves patient engagement. This project highlights the potential of React.js in creating comprehensive, user-focused healthcare solutions.",
        image: a,
        
        technologies: ["React Native", "Css", "GraphQl"],
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS","React Native", "Redux", "Tailwind CSS", "Material UI", "Bootstrap","React-Strap"
        ],
        img1:"https://e7.pngegg.com/pngimages/913/851/png-clipart-responsive-web-design-html-world-wide-web-consortium-world-wide-web-angle-text.png"
    },
    {
        title: "Backend",
        skills: ["Php", "MySQL", "GraphQl"]
    },
    {
        title: "Languages",
        skills: ["C","Java", "JavaScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman"]
    }
]
const socialLinks = [
    { link: "https://www.linkedin.com/in/kirti-pandey-b0066124a/", icon: IconBrandLinkedin },
    { link: "https://github.com/pkirti497", icon: IconBrandGithub },
    
];


const ExperienceInfo = [
    {
        role: "React Js Developer",
        company: "Webztechie",
        date: "june 2024 - Present",
        desc: "Experienced React.js and React Native developer with a strong background in building dynamic web and mobile applications. Skilled in creating responsive UIs, optimizing performance, and integrating APIs. Passionate about delivering high-quality code and seamless user experiences.",
        skills: ["React Js", "React Native","Javascript", "Tailwind Css","Css","Graphql"],
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRkcehyTQgmIR4OJwnp8XDpV--5fF38X4GpA&s"
    },
    {
        role: "Associate React Js Developer",
        company: "Digital Brain Media",
        date: "May 2023 - June 2024",
        desc: "Associate React.js Developer with a focus on building user-friendly web applications. Proficient in React components, state management, and front-end development best practices. Eager to contribute to collaborative projects and grow technical expertise in a dynamic environment.",
        skills: ["React Js", "React Strap","Javascript", "Bootstrap", "Material Ui", "Css","git","github"],
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGAhmPvNZSUguauPta_aAtXDdqxb7_8lOKQ&s"
    },
    {
        role: "React js Intern",
        company: "Softpro India",
        date: "Aug 2022 - April 2023",
        desc: " React.js Intern with a foundational understanding of front-end development and component-based architecture. Eager to apply coding skills in real-world projects, learn from experienced developers, and contribute to building intuitive and responsive user interfaces",
        skills: ["Html", "Css", "React", "Bootstrap", "Javascript", "Core Java", "Php", "MySql"],
         logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6EA-x17wZh_loTowWIrQVPlOczAOO6y5Gw&s"
    }
]
const EducationInfo = [
    {
        role: "Government girls polytechnic risiya nanpara Bahraich",
        company: "Diploma",
        date: "2019-2022",
        desc: "Grade:(A) 83% First division with honours",
        // skills: [""],
         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGoU7GDrSVpiHaSXZIk8xWMSBCFBV51bkUjw&s"
    },
    {
        role: "Sant Mauni Daas Inter Collage Vishunpur Hari Siddharth Nagar",
        company: "Inter Mediate ",
        date: "2018 - 2019",
        desc: "Grade:(A) 75% First division",
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS015YTUVLx7uPlifbJWY7yHPLZ9SP7ue-fGQ&s"
    },
    {
        role: "Sant Mauni Daas Inter Collage Vishunpur Hari Siddharth Nagar",
        company: "High School",
        date: "2016 - 2017",
        desc: "Grade:(A) 89.16% District Topper",
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS015YTUVLx7uPlifbJWY7yHPLZ9SP7ue-fGQ&s"
    },
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo,EducationInfo, Slugs };