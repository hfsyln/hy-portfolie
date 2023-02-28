import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import photo from "../assest/pp.jpeg"

function Home() {
  return (
    <div className="home">
      
      <div className="about">
      <img src={photo} alt=""  className="photo"/>
        <h2> Hi, My Name is Hafsa</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://github.com/hfsyln"><GithubIcon /></a>
          <EmailIcon />
          <a href="https://www.linkedin.com/in/hafsa-yal%C4%B1n-5648b0232/"><LinkedInIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents, SASS
            </span>
          </li>
          {/* <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li> */}
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;