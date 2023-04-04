import Input from "components/Input";
import Modal from "components/Modal";
import React, { useState } from "react";
import { BiRename } from "react-icons/bi";
import { CgClose, CgCloseO } from "react-icons/cg";
import { toast, ToastContainer } from "react-toastify";
import styles from "../../styles/Admin/User.module.scss";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  firestore,
  PortfoliosCollection,
  storage,
} from "../../firebase/firebaseConfig";
// import { addDoc, doc, updateDoc } from "firebase/firestore";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
type Props = {
  id: string;
  portName: string;
  show: boolean;
  setShown: Function;
};

// type PortProps = {
//   key: string;
//   name: string;
//   data: string[];
//   // data: {}
// };

const AddPort = ({ id, portName, show, setShown }: Props) => {
  const [name, setName] = useState<string>("");
  const [focusName, setFocusName] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [progresspercent, setProgresspercent] = useState<number>(0);

  const createPortImage = async (e: any) => {
    e.preventDefault();
    setUploading(true);
    const file = e.target[1]?.files[0];
    if (!name) {
      toast.error("Please Add an Image Name");
      return;
    }
    if (!file) {
      toast.error("Please Add an Image");
      return;
    }
    // const storageRef = ref(storage, `Portfolio/${name}`);
    const storageRef = ref(storage, `Portfolio/${portName}/${name}`);
    // console.log("storageRef", storageRef);

    const uploadTask = uploadBytesResumable(storageRef, file);
    navigator.onLine
      ? uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgresspercent(progress);
          },
          (error) => {
            alert(error);
          },
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                setImgUrl(downloadURL);
                AddPortToFireStore(downloadURL);
              })
              .finally(() =>
                setTimeout(() => {
                  setName("");
                  setImgUrl("");
                  setShown(!show);
                  setProgresspercent(0);
                  setUploading(false);
                  window.location.reload();
                }, 5000)
              );
          }
        )
      : toast.error(`Image Upload unsuccessful, You're Offline...`);
  };

  const AddPortToFireStore = async (downloadURL: string) => {
    //ADD TO FIRESTORE
    // const payload = {
    toast.loading("Loading...");
    //   imgLink: downloadURL,
    //   name: name,
    //   visible: true,
    // };
    // await addDoc(PortfoliosCollection, payload)
    //   .catch((err) => {
    //     console.log(`Error Found: `, err);
    //   })
    //   .finally(() => toast.success("Image Upload Successful"));
    // };
    const Portfolio = doc(firestore, `Portfolio/${id}`);
    // console.log("Portfolio to Update", Portfolio);
    // await updateDoc(PortfoliosCollection,
    // {

    // })

    // set local variable to switch
    // setImageVisible(!ImgShudBVisible);
    // const PortfolioRef = doc(firestore, `Portfolios/${portName}`, id);
    // console.log(PortfolioRef);
    //Try to update doc
    try {
      // alert("I will update slide");
      // await updateDoc(Portfolio, {
      //   Images: data.add(downloadURL)
      // });
      // toast.success("Image Updated successfully");
      // setImageVisible(!ImgShudBVisible);

      // Atomically add a new region to the "regions" array field.
      await updateDoc(Portfolio, {
        Images: arrayUnion(downloadURL),
      });
      toast.success("Successfully added Image");
      // Atomically remove a region from the "regions" array field.
      // await updateDoc(PortfolioRef, {
      //     regions: arrayRemove("east_coast")
      // });
      setUploading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show}>
      <ToastContainer />
      <div className={styles.add__portfolio__image}>
        <button className="close" onClick={() => setShown(!show)}>
          <CgClose />
        </button>
        <h2>
          You are Adding {name} to {portName}
        </h2>
        <form onSubmit={createPortImage}>
          <Input
            label="Image Name"
            placeholder="Set a Name"
            value={name}
            setValue={setName}
            focus={focusName}
            setFocus={setFocusName}
            icon={<BiRename />}
            pass={false}
            textare={false}
          />
          <input type="file" name={name} id={`${name}-ID`} />
          <input
            type="submit"
            value="Submit"
            style={{
              cursor: uploading ? "not-allowed" : "pointer",
            }}
            disabled={uploading}
          />
        </form>
        <div
          style={{
            width: `${progresspercent}%`,
            height: "3px",
            border: "0.5px solid #777",
            backgroundColor: "#333",
            borderRadius: "3px",
          }}
        />
        {imgUrl && <div>{imgUrl}</div>}
      </div>
    </Modal>
  );
};

export default AddPort;
