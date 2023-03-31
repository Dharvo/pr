import Modal from "components/Modal";
import { firestore } from "../../firebase/firebaseConfig";
import React from "react";
import { CgClose } from "react-icons/cg";
import { toast, ToastContainer } from "react-toastify";
import styles from "../../styles/Admin/User.module.scss";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";

type Props = {
  name: string;
  show: boolean;
  setShown: Function;
  img: string;
  docId: string;
};

const DelPort = ({ name, show, setShown, img, docId }: Props) => {
  const verifyDelete = async (docId: string) => {
    // const Slide = doc(firestore, `Slides/${docId}`);
    // deleteDoc(Slide);
    // setShown(!show);
    // toast.loading("Deleting Image ...");
    // window.scrollY = 0;

    toast.loading("Loading...");
    const Portfolio = doc(firestore, `Portfolio/${docId}`);
    try {
      // Atomically remove a region from the "regions" array field.
      await updateDoc(Portfolio, {
        Images: arrayRemove(img),
      });
      toast.dark("Image Deleted !");
      setTimeout(() => {
        window.location.reload();
      }, 1700);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show}>
      <ToastContainer />
      <div className={styles.add__slide__form}>
        <button onClick={() => setShown(!show)}>
          <CgClose />
        </button>
        <h2>Are you sure you want to delete this Image from {name}</h2>
        <div style={{ display: "flex" }}>
          <input
            type="submit"
            // style={{ marginRight: '1.8rem' }}
            value="Yes"
            onClick={() => verifyDelete(docId)}
          />
          <input
            type="submit"
            // style={{ margin: '1.8rem' }}
            value="No"
            onClick={() => {
              setShown(!show);
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DelPort;
