import React, { useEffect, useState } from "react";
import styles from "../../styles/Admin/User.module.scss";
// import { IconType } from "react-icons";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCheckCircle, BsFillCheckCircleFill } from "react-icons/bs";
import Loading from "../Loading";
import { firestore } from "../../firebase/firebaseConfig";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
// import DeleteSlide from "./DeleteSlide";
import { toast } from "react-toastify";

type Option = {
  name: string;
  value: string;
  setValue: Function;
  icon: Function;
  shown: boolean;
  placeholder: string;
};
const ContactOption = ({
  name,
  value,
  setValue,
  icon,
  shown,
  placeholder,
}: Option) => {
  const [opted, setOpted] = useState(false);

  useEffect(() => {
    setOpted(shown);
  }, [shown]);

  const activateOpt = async () => {
    //UPDATE SERVICE HERE
    //   console.log(name, value, icon, shown, placeholder);
    const Contact = doc(firestore, `Contacts/${name}`);
    console.log("Slide to Update", Contact);
    // set local variable to switch
    // setImageVisible(!ImgShudBVisible);
    //Try to update doc
    console.log(Contact);
    try {
      // alert("I will update slide");
      await updateDoc(Contact, {
        show: !opted,
      });
      toast.success("Contact Updated successfully");
      setOpted((opt) => !opt);
      // setImageVisible(!ImgShudBVisible);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.contact__option}>
      <h3>{name}</h3>
      <div>
        <input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={styles.actions}>
          <span className={`${styles.icon} ${opted ? styles.opted : ""}`}>
            {icon()}
          </span>
          <label className={styles.switch}>
            <input
              type="checkbox"
              onChange={(e) => {
                console.log(e, e.target.value);
              }}
              onClick={activateOpt}
              checked={opted ? true : false}
            />
            <span
              className={`${styles.slider} ${styles.round} ${
                opted ? styles.black : ""
              }`}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContactOption;
