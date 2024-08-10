import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import Nav from "./Nav";
import styles from "../styles/Home/index.module.scss";
import { useThemeContext } from "../context/Theme";
import router from "next/router";
import { useNavbarContext } from "../context/NavContext";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  //   setDarkTheme: Function;
};
function Layout(props: Props) {
  // function Layout(props) {
  // const [currentNav, set] = useState<string>("/");
  // const navs: string[] = ["", "about", "portfolio", "contact"];
  const [darkTheme] = useThemeContext();
  const [navs, currentNav, setNav] = useNavbarContext();
  const p = window.location.pathname;
  useEffect(() => {
    //.indexOf("/")

    // console.log(
    //   "substring",
    //   p.substring(
    //     1,
    //     p
    //       .substring(1, p.length)
    //       .indexOf("/") == -1
    //       ? p.length
    //       : p
    //           .substring(1, p.length)
    //           .indexOf("/") + 1
    //   )
    // );
    setNav(
      "/" +
        p.substring(
          1,
          p.substring(1, p.length).indexOf("/") == -1
            ? p.length
            : p.substring(1, p.length).indexOf("/") + 1
        )
      // "/about"
      // p
    );
  }, [p,setNav, currentNav]);

  // console.log();
  // console.log(p);
  // console.log(currentNav);
  // console.log(window.location.hostname);
  // console.log(ReactDOM.findDOMNode.);
  return (
    // <>
    <div className="body" id={darkTheme ? styles.Dark : styles.Light}>
      <div className={styles.navbar}>
        <Link
          className={`${styles.logo} ${
            currentNav === "/about" ? styles.edit : ""
          }`}
          // onClick={() => router.push("/")}
          href={"/"}
        >
          pr
        </Link>

        <div className={styles.navs}>
          {navs.map((nav: any) => (
            <Nav
              key={nav}
              name={nav}
              clas={currentNav === "/" + nav ? true : false}
            />
          ))}
        </div>
      </div>
      <LeftPanel />
      {/* <LeftPanel set={props.setDarkTheme} /> */}
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
