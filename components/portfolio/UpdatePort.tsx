import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import styles from "../../styles/Admin/User.module.scss";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { firestore } from "../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

type Props = {
  name: string;
  fav: boolean;
  // setFold: Function;
  id: string;
  favNo: number;
  // setFavouriteNav: Function;
};

const UpdatePort = ({ name, fav, id, favNo }: Props) => {
  const [favouriteNav, setFavouriteNav] = useState<boolean>(false);
  useEffect(() => {
    setFavouriteNav(fav);
  }, [fav, name]);

  const updatePortfolio = async (currentFav: boolean, docId: string) => {
    // alert(docId);
    // const updatePort = async (e: any, currentFav: boolean, docId: string) => {
    // e.preventDefault();
    //Create Slide from firestore
    toast.loading;
    console.log(currentFav);
    if (favNo >= 3 && currentFav === false) {
      toast.warning("Cannot favourite more than three portfolios");
      return;
    }
    const Portfolio = doc(firestore, `Portfolio/${docId}`);
    // set local variable to switch
    //Try to update doc
    // console.log(Slide);
    try {
      await updateDoc(Portfolio, {
        Favourite: !currentFav,
      });
      toast.success("Image Updated successfully");
      setFavouriteNav(!currentFav);
      // setImageVisible(!ImgShudBVisible);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={() => updatePortfolio(fav, id)}
      className={`${styles.FavouriteBtn} ${favouriteNav && styles.Fav}`}
      // className={`${fav && styles.Fav} FavouriteBtn`}
      title={`${favouriteNav ? "Un" : ""}Favourite ${name} portfolio`}
    >
      <BsFillSuitHeartFill />
      {/* {favouriteNav ?
       : <BsSuitHeart />} */}
    </button>
  );
};
export default UpdatePort;
