import Image from "next/image";
import React from "react";
import styles from "../../styles/Admin/User.module.scss";
type Data = {
  name: string;
  comment: string;
  imgUrl: string;
};
const Reev = ({ name, comment, imgUrl }: Data) => {
  return (
    <div className={styles.reev}>
      <div className={styles.reev__Image}>
        <Image src={imgUrl} alt={name} width={500} height={500} />
      </div>
      <p>
        <b>{name} </b> <br /> says <br /> <i> &#34;{comment}&#34;</i>
      </p>
    </div>
  );
};

export default Reev;
