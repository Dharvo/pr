import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import styles from "../../styles/Admin/User.module.scss";
import AddFolder from "./AddFolder";
import CrossNav from "./CrossNav";
type Folder = {
  id: string;
  Title: string;
  Favourite: boolean;
  Images: string[];
};
type FolderArr = {
  id: string;
  Title: string;
  Favourite: boolean;
  Images: string[];
}[];

type Fold = {
  folders: FolderArr;
  fold: string;
  setFold: Function;
  favNo: number;
};
const FolderTouch = ({ folders, fold, setFold, favNo }: Fold) => {
  // const [show, setShown] = useState<boolean>(false);
  //DELIVERABLES INITIALLY ONLY INDEX 0 BE FOLD
  //ON CLICK UPDATE STATE, OF ANY ADD UP WIDTH FOLD, & RELOAD PICTURES
  //ON CLICK BUTTON OF ANY ADD UP WIDTH FOLD, & RELOAD PICTURES
  // useEffect(() => {}, [fold, folders]);
  // console.log(fold);
  return (
    <div className={styles.portfolioNav}>
      <div>
        {folders?.map((folderObject: Folder) => {
          const folded: FolderArr = folders.filter(
            (foold) => foold.Title === fold
          );
          const Index: number = folders.findIndex(
            (foold) => foold === folded[0]
          );
          if (folderObject === folded[0]) {
            // IF ITS THE FIRST NAV RETURN WITH DEFAULT CLASS
            return (
              <div
                key={folderObject.id}
                className={`${styles.folderTouch} white`}
              >
                <CrossNav
                  id={folderObject.id}
                  name={folderObject.Title}
                  favNo={favNo}
                  fav={folderObject.Favourite}
                  setFold={setFold}
                />
              </div>
            );
          }
          if (folders.indexOf(folderObject) <= Index) {
            // IF ITS INDEX IS LESS THAN THE ACTIVE INDEX
            return (
              <div key={folderObject.id} className={styles.white}>
                <CrossNav
                  id={folderObject.id}
                  favNo={favNo}
                  name={folderObject.Title}
                  fav={folderObject.Favourite}
                  setFold={setFold}
                />
              </div>
            );
          }
          return (
            <CrossNav
              id={folderObject.id}
              key={folderObject.id}
              favNo={favNo}
              name={folderObject.Title}
              fav={folderObject.Favourite}
              setFold={setFold}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FolderTouch;
