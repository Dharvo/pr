import React from "react";
import Image from "next/image";
import Ponle from "../../public/Ponle.jpg";
import styles from "../../styles/About/About.module.scss";

const AboutBg: React.FC = () => {
  return (
    <div
      className={styles.About__Background}
      style={{ backgroundImage: `url("${Ponle.src}")` }}
    >
      {/* <Image
            className={styles.Ubuntu}
            src={Ponle}
            alt='Ubuntu'
            width={400}
            height={400}
            placeholder='blur'
        /> */}
    </div>
  );
};

export default AboutBg;
