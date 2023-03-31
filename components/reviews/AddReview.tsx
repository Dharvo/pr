import React, { useEffect, useState } from "react";
import Modal from "components/Modal";
import { CgClose } from "react-icons/cg";
import styles from "../../styles/Admin/User.module.scss";
import Input from "../Input";
import { BiRename } from "react-icons/bi";
import {
  firebase,
  firestore,
  ReviewCollection,
  SlidesCollection,
  storage,
} from "../../firebase/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import {
//   DocumentData,
//   CollectionReference,
//   QueryDocumentSnapshot,
//   query,
//   limit,
//   getDocs,
//   collection,
//   where,
//   doc,
//   addDoc,
//   setDoc,
//   DocumentReference,
// DocumentData,
// CollectionReference,
// collection,
// } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
// import Modal from "../Modal";
import { toast } from "react-toastify";
// import useDecypher from "../../components/useDecypher";
// import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "components/ErrorBoundary";

type Props = {
  show: boolean;
  set: Function;
};
const AddReview = ({ show, set }: Props) => {
  // const [name, setName] = useState('')
  const [clientName, setClientName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [focusName, setFocusName] = useState<boolean>(false);
  const [focusComment, setFocusComment] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [progresspercent, setProgresspercent] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const createSlide = async (e: any) => {
    // const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    const file = e.target[2]?.files[0];
    console.log(file);
    if (!clientName) {
      toast.error("Please Add an Image Name");
      return;
    }
    if (!file) {
      toast.error("Please Add an Image");
      return;
    }
    const storageRef = ref(storage, `Slides/${name}`);
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
            //   if(imgUrl !=='' )
            //   {
            await getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                setImgUrl(downloadURL);
                AddToStore(downloadURL);
              })
              .finally(() =>
                setTimeout(() => {
                  setClientName("");
                  setComment("");
                  setImgUrl("");
                  set(!show);
                  setProgresspercent(0);
                  setUploading(false);
                  window.location.reload();
                }, 10000)
              );
          }
          // .catch((err) => toast.error(`Ooops You're Offline...`)));
        )
      : toast.error(`Image Upload unsuccessful, You're Offline...`);

    //Reset Input Fields
    //Close Modal
    //Reset progresspercent n img link to ''
    // console.log(error)
    // useDecypher(error)9
  };
  // )
  const AddToStore = async (downloadURL: string) => {
    //ADD TO FIRESTORE
    const payload = {
      name: clientName,
      comment: comment,
      imgLink: downloadURL,
    };
    // console.log("payload", payload);
    // const dbInstance = collection(database, 'notes');
    // const slidesCollection: CollectionReference<DocumentData> = collection(
    //   firestore,
    //   "Slides"
    // );
    // console.log("slidesCollection", slidesCollection);

    // try {
    //   if (navigator.onLine) {
    //   await
    await addDoc(ReviewCollection, payload)
      .catch((err) => {
        console.log(`Error Found: `, err);
      })
      .finally(() => {
        toast.success("Review Uploaded ");
        toast.loading("Please wait...");
      });
    // };
  };

  const closeModal = () => {
    set(!show);
    setClientName("");
    setComment("");
    setUploading(false);
    setProgresspercent(0);
  };

  return (
    <Modal show={show}>
      <ErrorBoundary>
        <div className={styles.add__slide__form}>
          <button className="close" onClick={closeModal}>
            <CgClose />
          </button>
          <form onSubmit={createSlide}>
            <Input
              label="Client Name"
              placeholder="Enter a Client name"
              value={clientName}
              setValue={setClientName}
              focus={focusName}
              setFocus={setFocusName}
              icon={<BiRename />}
              pass={false}
            />
            <Input
              label="Comments"
              placeholder="Set a Name"
              value={comment}
              setValue={setComment}
              focus={focusComment}
              setFocus={setFocusComment}
              icon={<BiRename />}
              pass={false}
            />
            <input type="file" name={clientName} id={`${clientName}-ID`} />
            <input
              type="submit"
              value="Submit"
              style={{
                cursor: uploading ? "not-allowed" : "pointer",
              }}
              disabled={uploading}
            />
          </form>

          {/* {imgUrl && <div>{imgUrl}</div>} */}
          {/* <> */}
          {/* <span */}
          <div
            style={{
              width: `${progresspercent}%`,
              height: "3px",
              border: "0.5px solid #777",
              backgroundColor: "#333",
              borderRadius: "3px",
            }}
          />
          {imgUrl && (
            <div style={{ paddingTop: "10px" }}>Upload successful !</div>
          )}
          {/* </div> */}
        </div>
      </ErrorBoundary>

      {/* <div className={styles.add__portfolio__image}>
				<button className='close' onClick={() => set(!show)}>
					<CgClose />
				</button>
				<form>
					<input type='text' />
					<input type='file' id={`${name}-ID`} />
					<input type='submit' value='Submit' />
				</form>
			</div> */}
    </Modal>
  );
};

export default AddReview;
