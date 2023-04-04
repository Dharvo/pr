import React from "react";
import Footer from "../../components/Footer";
import Reviews from "../../components/Reviews";
import TopProjects from "../../components/TopProjects";
import AboutBg from "components/about/AboutBg";
import AboutPonle from "components/about/AboutPonle";
import styles from "../../styles/About/About.module.scss";
import { useNavbarContext } from "context/NavContext";
import router from "next/router";
import { RiContactsFill } from "react-icons/ri";
import Stats from "components/Stats";
// import { AiOutlineWechat } from "react-icons/ai";
const About = () => {
  const [navs, currentNav, setNav] = useNavbarContext();
  return (
    <div id={styles.about}>
      <AboutBg />
      <div className={styles.about__content}>
        <div className={styles.name}>
          <h1>Ponle Richard OluwaGbenga</h1>
          <h4>Photographer</h4>
        </div>
        <AboutPonle />
        <button
          className={styles.contact__button}
          onClick={() => {
            // setNav("/contact");
            router.push("/contact");
          }}
        >
          Contact Me
          <span>
            <RiContactsFill />
            {/* <AiOutlineWechat /> */}
          </span>
        </button>
        <Stats />
      </div>
      <TopProjects />
      <Reviews />
    </div>
  );
};

export default About;
