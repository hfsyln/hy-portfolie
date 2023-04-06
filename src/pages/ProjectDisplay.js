import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from '@mui/icons-material/Language';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="pojectİcon">
      <a href={project.link}><GitHubIcon /></a>
      <a href={project.linkWeb}><LanguageIcon/></a>
      </div>
    </div>
  );
}

export default ProjectDisplay;