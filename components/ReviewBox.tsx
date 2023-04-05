import React from "react";
import styles from "../styles/About/Reviews.module.scss";
import Image from "next/image";
type boxType = {
  name: string;
  com: string;
  img: string;
};
const ReviewBox = ({ name, com, img }: boxType) => {
  return (
    <div className={styles.reviewBox}>
      <Image
        src={img}
        alt={`${img.substring(0, 21)}-Img`}
        width={600}
        height={700}
      />
      <p>
        <span>{name}</span> says
        <br />
        <i>
          &#34;
          {com}
          &#34;
        </i>
      </p>
    </div>
  );
};

export default ReviewBox;
