import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import styles from "../../styles/Admin/User.module.scss";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
type Props = { name: string; fav: boolean; setFold: Function };
const CrossNav = ({ name, fav, setFold }: Props) => {
  useEffect(() => {}, [name]);

  return (
    <div className={styles.crossNav} onClick={() => setFold(name)}>
      <span>{name}</span>
      <button
        className={`${styles.FavouriteBtn} ${fav && styles.Fav}`}
        // className={`${fav && styles.Fav} FavouriteBtn`}
        title={`${fav ? "Un" : ""}Favourite ${name} portfolio`}
      >
        {fav ? <BsFillSuitHeartFill /> : <BsSuitHeart />}
      </button>
      <button title={`Delete ${name} portfolio`}>
        <CgClose />
      </button>
    </div>
  );
};

export default CrossNav;
