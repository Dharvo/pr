import React from "react";
import styles from "../styles/Portfolio/Port.module.scss";
import Image from "next/image";
import Link from "next/link";
import Loading from "components/Loading";
import styled from "../styles/Admin/User.module.scss";

type boxType = {
  id: string;
  name: string;
  data: string[];
  all: boolean;
};
const PortBoxSub = ({ id, name, data, all }: boxType) => {
  const portImg = data[0];
  // console.log(name);
  // console.log(all);
  if (portImg === undefined || portImg === "") {
    return (
      <div className={styles.PortBox}>
        <div key={id} className={styled.image__loader}>
          <Loading props={true} />
        </div>
        <Link href={`/portfolio/${name}`}>
          {/* <Link href="/portfolio/[PortName]" as={`/portfolio/${id}`}> */}
          {/* href="/[slug]" */}
          {/* href="/my-folder/[id]" as="/my-folder/my-id" */}
          {/* <Link
          href={{
            pathname: `portfolio/${name}`,
            query: {
              id: id,
              name: name,
              data: data,
            },
          }}
        >
           */}
          <div className={styles.PortCover}>
            <p>{name}</p>
          </div>
        </Link>
      </div>
    );
  }
  if (all) {
    return (
      <>
        {data?.map((Box, i) => {
          // console.log(i);
          if (i == 0) {
            return (
              <div key={i} className={styles.PortBox}>
                <Image
                  className={styles.PortBox_img}
                  src={Box}
                  alt={`${Box}-${name}`}
                  // alt={`${data[0]}`}
                  // placeholder="blur"
                  width={400}
                  height={400}
                />
                <Link href={`/portfolio/${name}`}>
                  <div className={styles.PortCover}>
                    <p>{name}</p>
                  </div>
                </Link>
              </div>
            );
          }
          return (
            <div key={i} className={styles.PortBox}>
              <Image
                className={styles.PortBox_img}
                src={Box}
                alt={`${Box}-${name}`}
                // alt={`${data[0]}`}
                // placeholder="blur"
                width={400}
                height={400}
              />
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className={styles.PortBox}>
      <Image
        className={styles.PortBox_img}
        src={portImg}
        alt={`${portImg}-${name}`}
        // alt={`${data[0]}`}
        // placeholder="blur"
        width={400}
        height={400}
      />
      <Link href={`/portfolio/${name}`}>
        <div className={styles.PortCover}>
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default PortBoxSub;
