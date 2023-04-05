import React from "react";
import styles from "../styles/About/Reviews.module.scss";
import ReviewWrapper from "./ReviewWrapper";

function Reviews() {
  return (
    <div id={styles.Reviews}>
      <h2>See what people are saying about Richard</h2>
      <ReviewWrapper />
    </div>
  );
}

export default Reviews;
