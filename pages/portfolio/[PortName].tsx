import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Admin/User.module.scss";
import Masonry from "react-masonry-css";
import styled from "../../styles/Portfolio/Port.module.scss";
import useSWR from "swr";
import { getDocs } from "firebase/firestore";
import { PortfoliosCollection } from "../../firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Loading from "components/Loading";
import PortWrapper from "../../components/PortWrapper";
import { useNavbarContext } from "context/NavContext";

// const PortName = ({ PortName }: any) => {
//
// type portType = {
//   Favourite: boolean;
//   Images: string[];
//   Title: string;
//   id: string;
// };

// const fetcher = async () => {
//   const result: any = [];
//   await getDocs(PortfoliosCollection)
//     .then((snapshot) => {
//       snapshot.docs.forEach((snapshot) => {
//         result.push({ id: snapshot.id, ...snapshot.data() });
//       });
//     })
//     .catch(function (err) {
//       console.log("Found error:", err);
//     });
//   return result;
// };

const PortName = () => {
  // const { data, error, isValidating } = useSWR("wrapper", fetcher);
  const router = useRouter();

  // useEffect(() => {}, [isValidating]);
  // if (error) {
  //   toast.error(
  //     `An Error Occured from useSWR in portfolioWrapper: ${error?.message}`
  //   );
  //   return (
  //     <>
  //       <div className={styles.loading__div}>
  //         <Loading props={true} />
  //       </div>
  //     </>
  //   );
  // }
  // if (!data) {
  //   return (
  //     <>
  //       <div className={styles.loading__div}>
  //         <Loading props={true} />
  //       </div>
  //     </>
  //   );
  // }

  // console.log(data);
  // console.log(error);
  console.log(router);
  // query: { id: id, name: name, data: data }
  const { PortName } = router.query;
  // const Images = data.filter(
  //   (portfolio: portType) => portfolio?.Title === PortName
  // )[0]?.Images;
  // console.log(Images);

  const [navs, currentNav, setNav] = useNavbarContext();
  console.log(navs);
  console.log(currentNav);
  setNav("/portfolio");
  return (
    <PortWrapper PortName={PortName} />
    // <div>
    //   The dynamic route is {PortName},{PortName}
    // </div>
  );
};

export default PortName;
