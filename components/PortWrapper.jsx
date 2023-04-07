import React, { useEffect, useState } from "react";
import styles from "../styles/Admin/User.module.scss";
import Masonry from "react-masonry-css";
import styled from "../styles/Portfolio/Port.module.scss";
import useSWR from "swr";
import { getDocs } from "firebase/firestore";
import { PortfoliosCollection } from "../firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Loading from "components/Loading";
import CustomPort from "./CustomPort";
import PortBoxSub from "./PortBoxSub";

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

const PortWrapper = ({ PortName }) => {
  const { data, error, isValidating } = useSWR("PortWrapper", fetcher);
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

  // const portFound = data.filter((portfolio) => {
  //   // console.log(portfolio);

  //   portfolio?.Title === PortName;
  // });
  // console.log("PortName", PortName);
  // console.log("portFound", portFound);
  const selectedPort = data.filter(
    (portfolio) => portfolio?.Title === PortName
  );
  //   // const Images = data.filter(
  // // )[0]?.Images;
  // console.log("portFound", selectedPort.length); //Urban - 1, urbanz - 0
  // console.log("portFound", !selectedPort.length); //Urban - false, urbanz - true
  //
  if (!selectedPort.length) {
    return <CustomPort />;
  }
  // console.log(selectedPort[0]?.Title);
  // IF ENTERED PORTNAME IS NOT A VALID PORTFOLIO NAME PLS RETURN CUSTOM PAGE
  // RETURN WITH ITS COMPLETE IMAGES ND OTHERS IN THEIR RIGHTFULL POSITIONS
  //
  return (
    // <div className={styled.masonary_wrapper}>
    <Masonry
      breakpointCols={{
        default: 2,
        900: 1,
      }}
      className="masonary_portWrapper"
      // className={styled.masonary_portWrapper}
      // columnClassName={styled.masonary_portWrapper_column}
      columnClassName="masonary_portWrapper_column"
    >
      {data?.map((folder) => (
        <PortBoxSub
          key={folder.id}
          id={folder.id}
          name={folder.Title}
          data={folder.Images}
          all={selectedPort[0]?.id === folder.id}
        />
      ))}
    </Masonry>
    // </div>
  );
};

export default PortWrapper;
