import { firestore, slidesCollection } from "../../firebase/firebaseConfig";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Admin/User.module.scss";
import { getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import SlideImage from "./SlideImage";
import AddSlide from "./AddSlide";
import Loading from "../Loading";
import { toast } from "react-toastify";
import DefaultSlide from "./DefaultSlide";
import { ToastContainer } from "react-toastify";

const fetcher = async () => {
  //   const slidesCollection = collection(firestore, "Slides");
  const result = [];
  // try {
  await getDocs(slidesCollection)
    .then((snapshot) => {
      snapshot.docs.forEach((snapshot) => {
        result.push({ id: snapshot.id, ...snapshot.data() });
      });
    })
    .catch(function (err) {
      console.log("Found error:", err);
    });
  return result;
  // } catch (err) {
  // console.log('Found error:', err)
  // 	toast.error(`An Error Occured: ${err.message}`)
  // }
};

const SlideWrapper = () => {
  const { data, error, isValidating } = useSWR("slides", fetcher);
  const [show, setShown] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      data?.length === 0 ? toast.error(`Oops You're Offline...`) : null;
    }, 2500);
  }, [isValidating]);

  if (error) {
    toast.error(
      `An Error Occured from useSWR in Slide Wrapper: ${error?.message}`
    );
    return (
      <>
        <div className={styles.loading__div}>
          <Loading props={true} />
        </div>
      </>
    );
  }

  console.log(data);
  return (
    <div className={styles.slides__wrapper}>
      <ToastContainer />
      {data?.map((slideObj) => {
        return <SlideImage slideObj={slideObj} key={slideObj.id} />;
      })}
      <DefaultSlide show={show} setShown={setShown} />
      <AddSlide show={show} setShown={setShown} />
    </div>
  );
};

export default SlideWrapper;
