import FolderTouch from "./FolderTouch";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Admin/User.module.scss";
import Port from "./Port";
import useSWR from "swr";
import { getDocs } from "firebase/firestore";
import { PortfoliosCollection } from "../../firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Loading from "components/Loading";

const fetcher = async () => {
  // console.log("Portfolios", PortfoliosCollection);
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
  return result.sort((a, b) => b.Favourite - a.Favourite);
  // console.log();
  //  result;
};

const PortfolioWrapper = () => {
  const { data, error, isValidating } = useSWR("portfolio", fetcher);
  const [activeFold, setActiveFold] = useState("");

  // console.log(activeFold);
  useEffect(() => {
    // setTimeout(() => {
    //   data?.length === 0 ? toast.error(`Oops You're Offline...`) : null;
    // }, 2500);
    setTimeout(() => {
      //   // console.log("iN USEEFFECT", data[0]?.Title);

      //   // console.log(!data); //true - No data
      //   // console.log(data);
      //   !data ? null : setActiveFold(data[1]?.Title);
      //   // setActiveFold(data[1]?.Title);
      // }, 10000);
      // }, [data]);
      data?.length === 0 ? toast.error(`Oops You're Offline...`) : null;
      !data ? null : setActiveFold(data[0]?.Title);
    }, 3000);
    // }, [data, activeFold, isValidating]);
  }, [isValidating]);
  // console.log(activeFold);
  if (error) {
    // if (error || !data) {
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
  /*

  // console.log(data);
: 
const datas = [
  {
    Favourite: false,
      Images: [],
      Title: "ssfdxggjh",
      id: "3OxmboIDZQRskc4QUzAG",
    },
  ];
  // console.log(data);
  */
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
      {/* <ToastContainer /> */}
      <FolderTouch
        folders={data}
        setFold={setActiveFold}
        fold={activeFold}
        // favNo={2}
        favNo={
          data.filter((folderObject) => folderObject.Favourite === true).length
        }
      />
      <div className={styles.folder__photos}>
        {data?.map(
          (folder) =>
            folder?.Title === activeFold && (
              <Port
                key={folder.id}
                id={folder.id}
                name={folder.Title}
                data={folder.Images}
              />
            )
        )}
      </div>
    </>
  );
};

export default PortfolioWrapper;
