import React from "react";
 import {
   VerticalTimeline,
   VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Apr 2022 - Oct 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Clarusway Frontend Development Bootcamp
          </h3>
          <p> Frontend Developer / React.js Developer Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Marh 2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            FREELANCE Frontend Developer
          </h3>
         <br />
          <p className="vertical-timeline-element-subtitle">
          Developing the Frontend part with a senior Frontend developer in designing the site of a
          company's stock application.We are working on admin panel.
          </p>

          <a href="https://troygranite.com/">Website</a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;