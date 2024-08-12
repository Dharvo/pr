import React, { useState, useEffect } from "react";
import { SlidesCollection } from "../firebase/firebaseConfig";
import styles from "../styles/Home/index.module.scss";
import { getDocs } from "firebase/firestore";
import useSWR from "swr";
import Image1 from "../assests/Images/414.jpg";
import Image2 from "../assests/Images/Shalli.png";
import Image3 from "../assests/Images/73.jpg";
import Image4 from "../assests/Images/bad-boy-timz.jpg";
import Image5 from "../assests/Images/IMG_0532.jpg";
import Image6 from "../assests/Images/IMG_0812.jpg";
import Image8 from "../assests/Images/IMG_0529.jpg";
import Image9 from "../assests/Images/440.jpg";
import Image7 from "../assests/Images/IMG_9844.jpg";
import Image10 from "../assests/Images/IMG_0531.jpg";
import Image11 from "../assests/Images/jh5.jpg";
import Image12 from "../assests/Images/NS7III.png";
import Image13 from "../assests/Images/R3Y.jpg";
import Image14 from "../assests/Images/XyK.jpg";
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
  
  const guestSlides= [
    Image1,
Image2,
Image3,
Image4,
Image5,
Image6,
Image8,
Image9,
Image7,
Image10,
Image11,
Image12,
Image13,
Image14,
  ];
  // console.log("guestSlides",guestSlides);

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
       
      {guestSlides?.map((slide,i) => {
      //  console.log("slide",slide?.src);
      //  console.log("slide 1",Image1);
      return <ImgModal>
                <Image
                  src={slide?.src}
                  alt={`IMAGE-${i}`}
                  width={700}
                  height={700}
                />
              </ImgModal>})}
            </div>
      {/* <div className={styles.home__slides}>
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
      </div> */}
    </div>
  );
};

export default Home;
