import React, { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { CgEditHighlight, CgEditMarkup } from "react-icons/cg";
import { RiEditCircleFill } from "react-icons/ri";
import styles from "../../styles/Admin/User.module.scss";
// import AboutWrapper from "./AboutWrapper";
// import styles from '../../styles/Admin/User.module.scss'
import { getDocs, collection } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
// import SlideImage from './SlideImage'
// import AddSlide from './AddSlide'
// import Loading from '../Loading'
import { toast } from "react-toastify";
import { firestore } from "../../firebase/firebaseConfig";
import AboutWrapper from "./AboutWrapper";

const AdminAbout = () => {
  const [showEdit, setShowEdit] = useState<boolean>(false);

  // const { data, error, isValidating } = useSWR('aboutSWR', fetcher)
  // useEffect(() => {
  // 	setTimeout(() => {
  // 		data?.length === 0 ? toast.error(`Oops You're Offline...`) : null
  // 	}, 2500)
  // }, [isValidating])

  // if (error) {
  // 	toast.error(`An Error Occured from useSWR in About: ${error?.message}`)
  // }

  return (
    <section className={styles.Module}>
      <div className={styles.AdminAbout}>
        <header>
          <h3>About</h3>
          {/* <span> */}
          <button
            className={styles.aboutEdit}
            onClick={() => setShowEdit(!showEdit)}
          >
            <CgEditMarkup />
          </button>
        </header>
        <hr />
        <AboutWrapper showEdit={showEdit} setShowEdit={setShowEdit} />
      </div>
    </section>
  );
};

export default AdminAbout;
