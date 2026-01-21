import React from "react";
import "../styles/Home.css";
import Pic from "../assets/linkdin_pic.jpg";
import Footer from "./Footer";
import Card from "./Card";
import Ec2 from "../assets/aws-ec2.png";
import AWS from "../assets/aws.png";
import S3 from "../assets/aws-s3.png";
import IAM from "../assets/aws-iam.png";
import VPC from "../assets/aws-vpc.webp";
import CloudWatch from "../assets/aws-watch.png";
import RDS from "../assets/aws-rds.png";
import Lamda from "../assets/aws-lamda.png";
import VPN from "../assets/aws-vpn.png";
import APIGAT from "../assets/api-gat.png";
import NODE_JS from "../assets/Node_JS.webp";
import React_JS from "../assets/React_JS.svg";
import Three from "../assets/3TierA.png";
import MongoDB from "../assets/MG.png";
import Web from "../assets/web-diagram.png";

const Home = () => {
  return (
    <div className="home-container">
      <section className="main">
        <div className="header">
          <span className="badge">Available for Hire</span>
          <h1>
            Hi, I'm <span className="highlight">Rajan </span>
          </h1>
          <h3>Associate AWS Cloud Engineer</h3>
          <p>
            I architect <strong>resilient cloud ecosystems</strong>. From 3-Tier
            VPC networks to Serverless pipelines, I transform complex
            infrastructure requirements into high-performance digital realities.
          </p>

          <div className="social-links">
            <a
              href="/Rajan.pdf"
              title="Download Resume"
              download
              aria-label="Resume"
            >
              <i className="fa-solid fa-file-pdf"></i>
            </a>
            <a
              href="https://linkedin.com/in/rajan-modanwal"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="header-right">
          <img src={Pic} alt="Cloud Engineer" />
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Cloud Stack & Development</h2>
        <div className="card-main">
          {/* Use your specific images here instead of repeating AWS */}
          <Card image={AWS} title="AWS Architecture" />
          <Card image={Lamda} title="Serverless Computing" />
          <Card image={Ec2} title="Cloud Instances" />
          <Card image={S3} title="Storage Solutions" />
          <Card image={RDS} title="Database Management" />
          <Card image={VPC} title="Network Security" />
          <Card image={APIGAT} title="API Management" />

          {/* Fullstack Skills */}
          <Card image={React_JS} title="Frontend Development" />
          <Card image={NODE_JS} title="Backend Engine" />
          <Card image={MongoDB} title="NoSQL Database" />
        </div>
      </section>
      <section className="featured-container">
        <h2 className="section-title">Key AWS Deployments</h2>

        {/* Project 1 */}
        <div className="featured-project">
          <div className="project-content">
            <span className="badge">Cloud Infrastructure</span>
            <h2>High-Availability 3-Tier Architecture</h2>
            <p>
              Designed a fault-tolerant system across multiple Availability
              Zones. Implemented <strong>Auto Scaling</strong> to handle traffic
              spikes and
              <strong>RDS Multi-AZ</strong> for database redundancy.
            </p>
            <div className="tech-stack-tags">
              <span>Terraform</span> <span>VPC</span> <span>EC2</span>{" "}
              <span>RDS</span>
            </div>
            <a
              href="https://www.fosstechnix.com/how-to-set-up-a-3-tier-architecture-on-aws-with-ec2-rds-and-s3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="view-case-study"> View case-study </button>
            </a>{" "}          </div>
          <div className="project-image">
            {/* Insert Diagram here */}
            
            
            <img src={Three} alt="" />
          </div>
        </div>

        {/* Project 2 - Will automatically flip because of CSS nth-child(even) */}
        <div className="featured-project">
          <div className="project-content">
            <span className="badge">Serverless</span>
            <h2>Visitor Counter API</h2>
            <p>
              A serverless backend using <strong>Lambda</strong> and{" "}
              <strong>DynamoDB</strong>
              to track portfolio visitors, integrated via{" "}
              <strong>API Gateway</strong>.
            </p>
            <div className="tech-stack-tags">
              <span>Lambda</span> <span>DynamoDB</span> <span>Python</span>{" "}
              <span>API Gateway</span>
            </div>
            <a
              href="https://tourmaline-bienenstitch-cde731.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="view-case-study"> Live Demo </button>
            </a>{" "}
          </div>
          <div className="project-image">
            {/* <div style={{color: '#475569'}}>API Flow Diagram Placeholder</div> */}
            <img src={Web} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
