import ToDo from "./assets/ToDo.png";
import Task from "./assets/Tasks.jpg";

import Contact from "./assets/Contact.png";
import Decert from "./assets/Dece.png";
import Timer from "./assets/Timer.png";

import LaptopEc from "./assets/Laptop.png";
// Note: You should add images for these new cloud projects in your assets
import CloudCounter from "./assets/web-diagram.png"; 
import ContactFrom from "./assets/ContactForm.png"; 

const projects = [
  {
    title: "AWS Visitor Counter",
    image: CloudCounter,
    description: "Cloud-native analytics using AWS Lambda, DynamoDB, and API Gateway with real-time updates.",
    live: "https://tourmaline-bienenstitch-cde731.netlify.app/",
    github: "https://github.com/rajankumar4723?tab=repositories", // Update with specific repo
    tags: ["AWS Lambda", "DynamoDB", "API Gateway"],
    category: "Cloud"
  },
  {
    title: "Serverless Contact Portal", // Professional Name
    image: ContactFrom,
    description: "Automated end-to-end contact system utilizing an AWS Serverless backend to capture, process, and store user inquiries securely in the cloud.",
    live: "https://sparkling-starlight-9e7a73.netlify.app/",
    github: "https://github.com/rajankumar4723/ContactPage",
    // Fixed spelling in tags for professional look
    tags: ["DynamoDB", "Lambda", "IAM", "API Gateway"], 
    category: "Cloud" // Changed from Infrastructure to Cloud (matches your new filter)
},
{
  title: "Task Master",
  image: Task,
  description: "A high-performance productivity dashboard featuring local persistence, dynamic category filtering, and a glassmorphism UI. Engineered for seamless task management and rapid state updates.",
  live: "https://rajan4444.netlify.app/", // Updated to your new Netlify link
  github: "https://github.com/rajankumar4723/TodoApp",
  tags: ["React.js", "State Management", "Local Persistence"],
  category: "Full Stack",
  type: "Productivity Tool"
},
{
  title: "ToDo App",
  image: ToDo,
  description: "Full-stack application featuring user authentication and real-time database management.",
  live: "https://todo-j7zepaw6k-rajans-projects-1c89cf90.vercel.app",
  github: "https://github.com/rajankumar4723/TodoApp",
  tags: ["React", "Node.js", "MongoDB"],
  category: "Full Stack"
},
{
  title: "Contact Inquiry Portal",
  image: Contact, // Your imported image
  description: "A cloud-integrated inquiry system leveraging Firebase.",
  live: "https://contact-from-mains.netlify.app/",
  github: "https://github.com/rajankumar4723/contact-from-main",
  tags: ["HTML5", "CSS3", "JavaScript" ,"Firebase"],
  category: "Full Stack",
},

  {
    title: "Gourmet Marketplace",
    image: Decert, // Your imported asset
    description: "A dynamic e-commerce storefront featuring real-time cart synchronization, state-persistent order management, and a responsive mobile-first UI. Optimized for high-speed product filtering and seamless checkout flows.",
    live: "https://tourmaline-starburst-012446.netlify.app/",
    github: "https://github.com/rajankumar4723/product-list-with-cart-main",
    tags: ["JavaScript (ES6+)", "DOM Manipulation", "JSON Integration", "Responsive UI"],
    category: "Frontend",
    type: "E-commerce Solution"
  },
  {
    title: "Laptop E-Commerce",
    image: LaptopEc,
    description: "Premium landing page for notebook retail with responsive UI and modern animations.",
    live: "https://rajan-landingpage.netlify.app/",
    github: "https://github.com/rajankumar4723/Laptop_E-commerce",
    tags: ["React", "Tailwind"],
    category: "Frontend"
  },
  {
    title: "Cloud Performance Dashboard",
    image: Timer, // Your imported asset
    description: "A data-driven analytics interface that visualizes activity metrics across multiple time-series (Daily/Weekly/Monthly). Features dynamic JSON data fetching, state-based UI toggling, and a fully responsive grid layout.",
    live: "https://spiffy-banoffee-74d613.netlify.app/",
    github: "https://github.com/rajankumar4723/time-tracking-dsahboard-main",
    tags: ["JavaScript (ES6+)", "JSON Processing", "CSS Grid", "State Management"],
    category: "Frontend",
    type: "Data Visualization"
  }
];

export default projects;