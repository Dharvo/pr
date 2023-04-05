import React, { useState, useEffect } from "react";
import { SlidesCollection } from "../firebase/firebaseConfig";
import styles from "../styles/Home/index.module.scss";
import { getDocs } from "firebase/firestore";
import useSWR from "swr";
// import SlideImage from "./SlideImage";
// import AddSlide from "./AddSlide";
// import Loading from "../Loading";
import { toast } from "react-toastify";
// import DefaultSlide from "./DefaultSlide";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Loading from "./Loading";
import Image from "next/image";
import ImgModal from "./ImgModal";

const fetcher = async () => {
  //   const slidesCollection = collection(firestore, "Slides");
  const result = [];
  // try {
  // console.log(SlidesCollection);
  await getDocs(SlidesCollection)
    .then((snapshot) => {
      // console.log(snapshot);
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

const Home = () => {
  const { data, error, isValidating } = useSWR("slides", fetcher);
  // const [show, setShown] = useState(false);
  useEffect(() => {
    //   setTimeout(() => {
    //     data?.length === 0 ? toast.error(`Oops You're Offline...`) : null;
    //   }, 2500);
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
  return (
    <div id={styles.home}>
      {/* <ToastContainer /> */}
      <div className={styles.home__slides}>
        {data?.map((slideObj) => {
          console.log(slideObj.visible);
          if (slideObj.visible)
            return (
              <ImgModal>
                <Image
                  src={slideObj.imgLink}
                  alt={`${slideObj.name}-IMAGE`}
                  width={700}
                  height={700}
                />
              </ImgModal>
            );
          return null;
        })}
      </div>
    </div>
  );
};

export default Home;
