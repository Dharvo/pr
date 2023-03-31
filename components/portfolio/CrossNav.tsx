import React, { useEffect, useState } from "react";
import { CgClose, CgCloseO, CgCloseR } from "react-icons/cg";
import styles from "../../styles/Admin/User.module.scss";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { firestore } from "../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import UpdatePort from "./UpdatePort";
import DeletePort from "./DeletePort";
type Props = {
  name: string;
  fav: boolean;
  setFold: Function;
  id: string;
  favNo: number;
};
const CrossNav = ({ name, fav, setFold, id, favNo }: Props) => {
  const [showDel, setShowDel] = useState<boolean>(false);

  useEffect(() => {
    // setFavouriteNav(fav);
  }, [fav, name]);

  return (
    <div className={styles.crossNav} onClick={() => setFold(name)}>
      {/* <ToastContainer /> */}
      <span>{name}</span>
      <UpdatePort name={name} fav={fav} id={id} favNo={favNo} />
      <button
        onClick={() => setShowDel(!showDel)}
        title={`Delete ${name} portfolio`}
      >
        <CgClose />
      </button>
      <DeletePort docId={id} name={name} show={showDel} setShown={setShowDel} />
    </div>
  );
};

export default CrossNav;
