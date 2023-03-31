import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import Nav from "./Nav";
import styles from "../styles/Home/index.module.scss";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
  setDarkTheme: Function;
};
function Layout(props: Props) {
  const [currentNav, set] = useState<string>("/");
  const navs: string[] = ["", "about", "portfolio", "contact"];

  useEffect(() => {
    set(window.location.pathname);
  }, [window.location.pathname]);

  // console.log();
  console.log(currentNav);
  // console.log(window.location.hostname);
  // console.log(ReactDOM.findDOMNode.);
  return (
    <>
      <div className={styles.navbar}>
        <p className={styles.logo} onClick={() => set("/")}>
          pr
        </p>

        <div className={styles.navs}>
          {navs.map((nav) => (
            <Nav
              key={nav}
              name={nav}
              clas={currentNav === "/" + nav ? true : false}
            />
          ))}
        </div>
      </div>
      <LeftPanel set={props.setDarkTheme} />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
