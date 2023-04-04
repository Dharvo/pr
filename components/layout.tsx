import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import Nav from "./Nav";
import styles from "../styles/Home/index.module.scss";
import { useThemeContext } from "../context/Theme";
import { useNavbarContext } from "../context/NavContext";

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

  useEffect(() => {
    setNav(window.location.pathname);
  }, [window.location.pathname, currentNav]);

  // console.log();
  console.log(currentNav);
  // console.log(window.location.hostname);
  // console.log(ReactDOM.findDOMNode.);
  return (
    // <>
    <div className="body" id={darkTheme ? styles.Dark : styles.Light}>
      <div className={styles.navbar}>
        <p
          className={`${styles.logo} ${
            currentNav === "/about" ? styles.edit : ""
          }`}
          onClick={() => setNav("/")}
        >
          pr
        </p>

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
