import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon /> */}
        {/* <TwitterIcon /> */}
        {/* <FacebookIcon /> */}
        <a href="https://github.com/hfsyln"><GithubIcon /></a>
        <a href="https://www.linkedin.com/in/hafsa-yal%C4%B1n-5648b0232/"><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default Footer;