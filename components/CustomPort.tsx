import React from "react";
import styles from "../styles/Portfolio/Port.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const CustomPort = () => {
  const router = useRouter();
  const que = router.query?.PortName;
  console.log(que);
  return (
    <div className={styles.CustomPort}>
      There is no such portfolio, &#34;{que}&#34; in <br />
      <span>
        <Link href="/portfolio">Ponle Richard&#39;s Gallery</Link>
      </span>
    </div>
  );
};

export default CustomPort;
