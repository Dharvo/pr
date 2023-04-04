import React from "react";
import { TiAdjustBrightness } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../styles/Home/index.module.scss";
import Socials from "./Socials";
import { ToastContainer } from "react-toastify";
import { useThemeContext } from "context/Theme";
import { useNavbarContext } from "context/NavContext";
// type Props = {
//   set: Function;
// };

function LeftPanel() {
  // function LeftPanel({ set }: Props) {
  const [darkTheme, setDarkTheme] = useThemeContext();
  const [navs, currentNav] = useNavbarContext();

  return (
    <>
      <ToastContainer />
      <div
        className={`${styles.LeftPanel} ${
          currentNav === "/about" ? styles.edit : ""
        }`}
      >
        <div onClick={() => setDarkTheme((s: boolean) => (s = !s))}>
          <TiAdjustBrightness size={25} />
        </div>
        <Socials />

        {/*       
      <div>
        <FaFacebookF size={25} />
      </div>
      <div>
        <FaTwitter size={25} />
      </div>
      <div>
        <FaInstagram size={25} />
      </div> */}
      </div>
    </>
  );
}

export default LeftPanel;
