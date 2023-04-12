// import FolderTouch from "./FolderTouch";
import React, { useEffect, useState } from "react";
// import styles from "../../styles/Admin/User.module.scss";
import styles from "../styles/About/Projects.module.scss";
// import Port from "./Port";
import useSWR from "swr";
import { getDocs } from "firebase/firestore";
import { PortfoliosCollection } from "../firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Loading from "./Loading";
import Top from "./Top";

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
  return result.filter((port) => port.Favourite);
  // console.log();
  //  result;
};

const TopProjectsWrapper = () => {
  const { data, error, isValidating } = useSWR("portfolio", fetcher);
  //   const [activeFold, setActiveFold] = useState("");

  console.log(data);
  useEffect(() => {
    // setTimeout(() => {
    //   data?.length === 0 ? toast.error(`Oops You're Offline...`) : null;
    // }, 2500);
    // setTimeout(() => {
    //   // console.log("iN USEEFFECT", data[0]?.Title);
    //   // console.log(!data); //true - No data
    //   // console.log(data);
    //   !data ? null : setActiveFold(data[1]?.Title);
    //   // setActiveFold(data[1]?.Title);
    // }, 10000);
    // }, [data]);
    //   data?.length === 0 ? toast.error(`Oops You're Offline...`) : null;
    //   !data ? null : setActiveFold(data[0]?.Title);
    // }, 3000);
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
      {/* Favourite
: 
true
Images
: 
(3) ['https://firebasestorage.googleapis.com/v0/b/ponle-…=media&token=f293b68d-61b5-4586-bf62-b69a74d4842b',
 'https://firebasestorage.googleapis.com/v0/b/ponle-…=media&token=8c37de5f-75c8-4cb1-ad9e-0da79fdf1518', 
 'https://firebasestorage.googleapis.com/v0/b/ponle-…=media&token=6b67fa31-4276-48ec-b19f-0644cac79243']
Title
: 
"Vibesexpensive"
id
: 
"3OxmboIDZQRskc4QUzAG" */}
      <div className={styles.topProjectsWrapper}>
        {data?.map((projectInfo) => (
          <Top
            key={projectInfo.Title}
            title={projectInfo.Title}
            images={projectInfo.Images}
          />
        ))}
      </div>
      {/* <FolderTouch
        folders={data}
        setFold={setActiveFold}
        fold={activeFold}
        // favNo={2}
        favNo={
          data.filter((folderObject) => folderObject.Favourite === true).length
        }
      /> */}
      {/* <div className={styles.folder__photos}>
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
      </div> */}
    </>
  );
};

export default TopProjectsWrapper;
