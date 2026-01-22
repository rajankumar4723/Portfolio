import React from "react";
import "../styles/Home.css";
import Pic from "../assets/linkdin_pic.jpg";
import Footer from "./Footer";
import Card from "./Card";
import Ec2 from "../assets/aws-ec2.png";
import AWS from "../assets/aws.png";
import S3 from "../assets/aws-s3.png";
import RDS from "../assets/aws-rds.png";
import Lamda from "../assets/aws-lamda.png";
import APIGAT from "../assets/api-gat.png";
import NODE_JS from "../assets/Node_JS.webp";
import React_JS from "../assets/React_JS.svg";
import Three from "../assets/3TierA.png";
import MongoDB from "../assets/MG.png";
import Web from "../assets/web-diagram.png";
import VPC from "../assets/aws-vpc.webp";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="main">
        <div className="header">
          <span className="badge">Cloud Systems Specialist</span>
          <h1>
            Hi, I'm <span className="highlight">Rajan</span>
          </h1>
          <h3>Associate AWS Cloud Engineer</h3>
          <p>
            I architect <strong>highly available cloud ecosystems</strong>. From designing 
            resilient 3-Tier VPC networks to automating Serverless event-driven pipelines, 
            I bridge the gap between complex infrastructure and high-performance digital realities.
          </p>

          <div className="social-links">
            <a href="/Rajan-AWS.pdf" download title="Download Resume" aria-label="Resume">
              <i className="fa-solid fa-file-pdf"></i>
            </a>
            <a href="https://linkedin.com/in/rajan-modanwal" target="_blank" rel="noreferrer" title="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/rajankumar4723" target="_blank" rel="noreferrer" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="header-right">
          <div className="image-blob-container">
            <img src={Pic} alt="Rajan - Cloud Engineer" />
          </div>
        </div>
      </section>

      {/* Cloud & Dev Stack */}
      <section className="skills-section">
        <h2 className="section-title">Core Tech Stack</h2>
        <div className="card-main">
          <Card image={AWS} title="AWS Architecture" />
          <Card image={VPC} title="Secure Networking" />
          <Card image={Lamda} title="Serverless Logic" />
          <Card image={Ec2} title="Elastic Compute" />
          <Card image={RDS} title="Managed Databases" />
          <Card image={S3} title="Cloud Storage" />
          <Card image={APIGAT} title="API Gateway" />
          <Card image={React_JS} title="React UI" />
          <Card image={NODE_JS} title="Node Backend" />
          <Card image={MongoDB} title="NoSQL Storage" />
        </div>
      </section>

      {/* Featured Architecture Section */}
      <section className="featured-container">
        <h2 className="section-title">Infrastructure Case Studies</h2>

        {/* Project 1 - 3 Tier */}
        <div className="featured-project">
          <div className="project-content">
            <span className="badge">Scalability</span>
            <h2>Multi-AZ 3-Tier Architecture</h2>
            <p>
              Engineered a production-grade environment featuring <strong>Auto Scaling Groups</strong> 
              and <strong>Application Load Balancers (ALB)</strong>. This setup ensures zero 
              downtime by distributing traffic across multiple Availability Zones with automated 
              failover capabilities.
            </p>
            <div className="tech-stack-tags">
              <span>Terraform</span> <span>VPC</span> <span>ALB</span> <span>RDS Multi-AZ</span>
            </div>
            <a href="https://github.com/rajankumar4723" target="_blank" rel="noopener noreferrer">
              <button className="view-case-study">View Infrastructure</button>
            </a>
          </div>
          <div className="project-image">
            <img src={Three} alt="3-Tier Architecture Diagram" />
          </div>
        </div>

        {/* Project 2 - Serverless */}
        <div className="featured-project">
          <div className="project-content">
            <span className="badge">Serverless</span>
            <h2>Event-Driven Visitor Analytics</h2>
            <p>
              Developed a global-scale visitor tracking system using <strong>AWS Lambda</strong>, 
              <strong> DynamoDB</strong>, and <strong>Route 53</strong>. Integrated 
              API Gateway to handle real-time frontend requests with sub-second latency.
            </p>
            <div className="tech-stack-tags">
              <span>Lambda</span> <span>DynamoDB</span> <span>API Gateway</span> <span>CloudWatch</span>
            </div>
            <a href="https://tourmaline-bienenstitch-cde731.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="view-case-study">Explore Architecture</button>
            </a>
          </div>
          <div className="project-image">
            <img src={Web} alt="Serverless API Flow" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;