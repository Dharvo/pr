import React, { useState, useEffect } from "react";
import styles from "../../styles/Admin/User.module.scss";
import { getDocs, collection } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
// import SlideImage from './SlideImage'
// import AddSlide from './AddSlide'
import Loading from "../Loading";
import { toast } from "react-toastify";
import { AboutCollection, firestore } from "../../firebase/firebaseConfig";

import AboutEdit from "./AboutEdit";

type modalProps = {
  showEdit: Boolean;
  setShowEdit: Function;
};
const fetcher = async () => {
  var result: { id: string }[] = [];
  await getDocs(AboutCollection)
    .then((snapshot) => {
      snapshot.docs.forEach((snapshot) => {
        result.push({ id: snapshot.id, ...snapshot.data() });
      });
    })
    .catch(function (err) {
      toast.error(`An Error Occured: ${err.message}`);
    });
  return result;
};

const AboutWrapper = ({ showEdit, setShowEdit }: modalProps) => {
  const { data, error, isValidating } = useSWR("about", fetcher);
  useEffect(() => {
    setTimeout(() => {
      data?.length === 0 ? toast.error(`Oops You're Offline...`) : null;
    }, 2500);
  }, [isValidating]);

  if (error) {
    toast.error(`Error : ${error?.message}`);
    return (
      <>
        <div className={styles.loading__div}>
          <Loading props={true} />
        </div>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <div className={styles.loading__div}>
          <Loading props={true} />
        </div>
      </>
    );
  }
  // console.log(data);
  // if (content == '') {
  // toast.loading()
  // 	return (
  // 		<>
  // 			<div className={styles.loading__div}>
  // 				<Loading props={true} />
  // 			</div>
  // 		</>
  // 	)
  // }
  console.log(data[0]?.content);
  return (
    <p>
      <b> About Ponle Richard</b>
      <br />
      {data[0]?.content}
      <AboutEdit
        id={data[0]?.id}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        content={data[0]?.content}
      />
    </p>
  );
};

export default AboutWrapper;
