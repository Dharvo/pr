import { ReviewCollection } from "../firebase/firebaseConfig";
import { getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import styles from "../styles/About/Reviews.module.scss";
import Image from "next/image";
// import AddReview from "./AddReview";
// import ReviewWrapper from "./ReviewWrapper";
import useSWR from "swr";
// import Reev from "./Reev";
import Loading from "./Loading";
import ReviewBox from "./ReviewBox";

const fetcher = async () => {
  const result = [];
  await getDocs(ReviewCollection)
    .then((snapshot) => {
      snapshot.docs.forEach((snapshot) => {
        result.push({ id: snapshot.id, ...snapshot.data() });
      });
    })
    .catch(function (err) {
      console.log("Found error:", err);
    });
  return result;
};

const ReviewWrapper = () => {
  const { data, error, isValidating } = useSWR("Reviews", fetcher);
  //   const [reev, setReev] = useState(false);
  useEffect(() => {}, [isValidating]);

  if (error) {
    toast.error(`Error downloading Reviews: ${error?.message}`);
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
    <>
      <div className={styles.reviews}>
        {/*  MAPPED REVIEWS   */}
        <div className={styles.reviewsWrapper}>
          {data.map((review) => (
            //   <Reev
            <ReviewBox
              key={review.id}
              name={review.name}
              com={review.comment}
              img={review.imgLink}
            />
          ))}
        </div>

        {/* DEFAULT   */}
        {/* <div className={styles.addDefault} onClick={() => setReev(!reev)}>
          <div className={styles.default__review}>
            <BsPlusLg />
          </div>
          <aside>
            Add Client Review <br />
            Here !
          </aside>
        </div> */}
      </div>
      {/* <AddReview show={reev} set={setReev} /> */}
    </>
  );
};
export default ReviewWrapper;
