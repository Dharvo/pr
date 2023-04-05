import React from "react";
import styles from "../styles/About/Projects.module.scss";
import TopProjectsWrapper from "./TopProjectsWrapper";
function TopProjects() {
  return (
    <div id={styles.TopProjects}>
      <h2>Top Projects</h2>
      {/* ProjectSlide /> */}
      <TopProjectsWrapper />
      {/* Fine Dining .... images 1,2,3 Urban .... images 1,2,3 Vibesxpensive ....
      images 1,2,3 */}
    </div>
  );
}

export default TopProjects;
