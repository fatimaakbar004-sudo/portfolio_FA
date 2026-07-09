import portfolio from "../assets/projects/portfolio.jpg";
import portfolio2 from "../assets/projects/portfolio-2.jpg";
import portfolio3 from "../assets/projects/portfolio-3.jpg";
import weather from "../assets/projects/weather.jpg";
import ecommerce from "../assets/projects/ecommerce.jpg";
import movie from "../assets/projects/movie.jpg";
import task from "../assets/projects/task.jpg";
import landing from "../assets/projects/landing.jpg";
import dashboard from "../assets/projects/dashboard.jpg";


export const projects = [

  /* =========================
     REACT PROJECTS
  ========================= */


  {
    id: 1,

    title: "Developer Portfolio",

    category: "React",

    description:
      "Modern responsive portfolio website built using React and Tailwind CSS.",


    longDescription:
      "A fully responsive portfolio featuring dark mode, animations, SEO optimization, reusable components, EmailJS contact form, Framer Motion animations and accessibility improvements.",


    image: portfolio,


    gallery: [
      portfolio,
      portfolio2,
      portfolio3
    ],


    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
      "EmailJS",
      "React Router"
    ],


    features: [
      "Dark / Light Mode",
      "Responsive Layout",
      "Reusable Components",
      "SEO Optimized",
      "Animated Sections",
      "Contact Form",
      "Scroll Progress",
      "Accessibility"
    ],


    github:
      "https://github.com/yourusername/portfolio",

    demo:
      "https://portfolio.vercel.app"

  },



  {
    id: 2,

    title: "Weather Application",

    category: "React",

    description:
      "Weather forecasting application using OpenWeather API.",


    longDescription:
      "Displays real-time weather information with responsive UI and API integration.",


    image: weather,


    gallery: [
      weather,
      weather2
    ],


    technologies: [
      "React",
      "CSS",
      "API"
    ],


    features: [
      "Weather Search",
      "Forecast",
      "Responsive Design",
      "API Integration"
    ],


    github:
      "#",

    demo:
      "#"

  },



  {
    id: 3,

    title: "E-Commerce Store",

    category: "React",

    description:
      "Modern shopping platform with product browsing and cart system.",


    longDescription:
      "A complete ecommerce interface with reusable components, product cards and responsive shopping experience.",


    image: ecommerce,


    gallery: [
      ecommerce
    ],


    technologies: [
      "React",
      "Tailwind CSS",
      "API"
    ],


    features: [
      "Product Cards",
      "Shopping Cart",
      "Filtering",
      "Responsive UI"
    ],


    github: "#",

    demo: "#"

  },



  {
    id: 4,

    title: "Movie Explorer",

    category: "React",

    description:
      "Movie searching application using external API.",


    longDescription:
      "Application for discovering movies with dynamic search and details pages.",


    image: movie,

    gallery: [
      movie
    ],

    technologies: [
      "React",
      "API",
      "CSS"
    ],

    features: [
      "Movie Search",
      "API Integration",
      "Dynamic Pages"
    ],

    github: "#",

    demo: "#"

  },



  {
    id: 5,

    title: "Task Management App",

    category: "React",

    description:
      "Productivity application for managing daily tasks.",


    longDescription:
      "Task management dashboard with CRUD operations.",


    image: task,

    gallery: [
      task
    ],

    technologies: [
      "React",
      "Local Storage",
      "Tailwind",
      "JavaScript"
    ],

    features: [
      "Create Tasks",
      "Update Tasks",
      "Delete Tasks",
      "Progress Tracking"
    ],

    github: "#",

    demo: "#"

  },

  {
    id: 13,

    title: "Landing Page",

    category: "HTML/CSS",

    description:
      "Modern responsive landing page.",

    image: landing,

    gallery: [
      landing
    ],

    technologies: [
      "HTML",
      "CSS"
    ],

    features: [
      "Responsive Design",
      "Animations"
    ],

    github: "#",

    demo: "#"

  },

  {
    id: 18,

    title: "Portfolio Template",

    category: "HTML/CSS",

    description:
      "Creative portfolio template.",

    image: template,

    gallery: [
      template
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    features: [
      "Modern Layout",
      "Animations"
    ],

    github: "#",

    demo: "#"

  },

];