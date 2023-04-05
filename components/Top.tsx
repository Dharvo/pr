import React from "react";
import styles from "../styles/About/Projects.module.scss";
import Image from "next/image";

type Toptype = {
  title: string;
  images: string[];
};
const Top = ({ title, images }: Toptype) => {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.ImageSlide}>
        {images.map((img) => (
          <Image
            key={img.substring(0, 5)}
            src={img}
            alt={`${img.substring(0, 11)}_Project_Img`}
            width={300}
            height={300}
          />
        ))}
      </div>
    </div>
  );
};

export default Top;
