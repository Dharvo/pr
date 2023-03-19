import FolderTouch from "./FolderTouch";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Admin/User.module.scss";
import Port from "./Port";
import useSWR from "swr";
import { getDocs } from "firebase/firestore";
import { PortfoliosCollection } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import Loading from "components/Loading";

const fetcher = async () => {
  console.log("Portfolios", PortfoliosCollection);
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

const PortfolioWrapper = () => {
  const [fold, setFold] = useState("");
  const { data, error } = useSWR("portfolio", fetcher);

  // useEffect(() => {
  // 	setTimeout(() => {
  // 		!data ? toast.error(`Oops You're Offline...`) : setFold(!data ? '' : data[0]?.name)
  // 	}, 2500)
  // }, [])
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

  return (
    <>
      <FolderTouch folders={!data ? [] : data} setFold={setFold} fold={fold} />
      <div className={styles.folder__photos}>
        {/* {data?.length === 0
					? null
					: data?.map(
							(folder) =>
								folder.name === fold && (
									<Port key={folder.name} data={folder.data} name={folder.name} />
								)
					  )} */}
      </div>
    </>
  );
};

export default PortfolioWrapper;
