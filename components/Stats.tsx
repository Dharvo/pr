import React from "react";
import styles from "../styles/About/About.module.scss";
function Stats() {
  type statType = {
    id: any;
    no: number;
    stat: String;
  };

  const RichyStats: statType[] = [
    { id: 1, no: 29, stat: "Posts" },
    { id: 2, no: 1922, stat: "Followers" },
    { id: 3, no: 2, stat: "Reviews" },
  ];
  const res = (nom: number) => {
    if (nom > 1000) {
      //   return nom.toPrecision(2);
      return `${nom.toString().substring(0, 1)}.${nom
        .toString()
        .substring(1, 2)}k`;
      //   return nom.toLocaleString();
      //   return nom.toFixed
    }
    return nom;
  };

  return (
    <div className={styles.richyStats}>
      {RichyStats.map((stat) => (
        <>
          <div key={stat.id} className={styles.statBox}>
            {/* <p>{`${stat.no}`}</p> */}
            <p>{`${res(stat.no)}`}</p>
            {/* if no >1000? no. */}
            <br />
            <p>{`${stat.stat}`}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Stats;
