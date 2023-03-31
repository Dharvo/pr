import Link from "next/link";
import React from "react";
import styles from "../styles/Home/index.module.scss";

function Nav(props: { name: string; clas: boolean }) {
  return (
    <Link
      href={`${props.name === "" ? "/" : `/${props.name}`}`}
      className={props.clas ? styles.active : ""}
    >
      {props.name === "" ? "home" : props.name}
    </Link>
  );
}

export default Nav;
