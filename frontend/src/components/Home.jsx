import React from "react";
import "../styles/Home.css";
import Pic from "../assets/linkdin_pic.jpg";
import Footer from "./Footer";
import Card from "./Card";
import HTMLImage from "../assets/HTML.jpeg";
import CSS from "../assets/CSS.jpeg";
import JS from "../assets/Js.png";
import C_Plus from "../assets/C++.png";
import NODE_JS from "../assets/Node_JS.webp";
import React_JS from "../assets/React_JS.svg";
import DSA from "../assets/DSA.png";
import MongoDB from "../assets/MG.png";
import Tailwind from "../assets/tailwind.jpeg";
import Java from "../assets/java.jpeg";





const Home = () => {
  return (
    <>
      <div className="main">
        <div className="header">
          <h1>Hi, I'm Rajan 👋</h1>
          <h3>Frontend Developer | React | JavaScript</h3>
          <p>
            I build modern, fast, and responsive web applications. Experienced
            in React, Next.js, Node.js, and MongoDB. Focused on writing clean
            code and solving real-world problems.
          </p>
          <div className="social-links">
            <div>
    
            <a href="/Rajan.pdf" className="btn-a" download>
            <i class="fa-solid fa-download"></i>
</a>

            </div>
            <a className="" href="https://linkedin.com/in/your-profile" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/your-profile" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://twitter.com/your-handle" target="_blank"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>

        <div className="header-right">
          <img src={Pic} alt="Rajan Profile" />
        </div>
      </div>

      <h2 className="section-title">Skills</h2>
      <div className="card-main">
       
       <Card image={C_Plus}/>
       <Card image={HTMLImage}/>
       <Card image={CSS}/>
       <Card image={JS}/>
       <Card image={NODE_JS}/>
       <Card image={React_JS}/>
       <Card image={DSA}/>
       <Card image={MongoDB}/>
       <Card image={Tailwind}/>
       <Card image={Java}/>






    

      </div>

      <Footer />
    </>
  );
};

export default Home;
