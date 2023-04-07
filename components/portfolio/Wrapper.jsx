import FolderTouch from "./FolderTouch";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Admin/User.module.scss";
import Masonry from "react-masonry-css";
import styled from "../../styles/Portfolio/Port.module.scss";
import Port from "./Port";
import useSWR from "swr";
import { getDocs } from "firebase/firestore";
import { PortfoliosCollection } from "../../firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Loading from "components/Loading";
import PortBox from "../portfolio/PortBox";

const fetcher = async () => {
  const result = [];
  await getDocs(PortfoliosCollection)
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

const Wrapper = () => {
  const { data, error, isValidating } = useSWR("wrapper", fetcher);
  useEffect(() => {}, [isValidating]);
  if (error) {
    toast.error(
      `An Error Occured from useSWR in portfolioWrapper: ${error?.message}`
    );
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
    // <div className={styled.masonary_wrapper}>
    <Masonry
      breakpointCols={{
        default: 2,
        900: 1,
      }}
      className={styled.masonary_wrapper}
      columnClassName={styled.masonary_wrapper_column}
    >
      {data?.map((folder) => (
        <PortBox
          key={folder.id}
          id={folder.id}
          name={folder.Title}
          data={folder.Images}
        />
      ))}
    </Masonry>
    // </div>
  );
};

export default Wrapper;
