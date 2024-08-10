import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { CgEditHighlight, CgEditMarkup } from "react-icons/cg";
import { RiEditCircleFill } from "react-icons/ri";
import styles from "../../styles/Admin/User.module.scss";
import AboutWrapper from "./AboutWrapper";

import ReactDOM from "react-dom";
import Input from "../Input";
import { BiRename } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { firebase, firestore, storage } from "../../firebase/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  DocumentData,
  CollectionReference,
  QueryDocumentSnapshot,
  query,
  limit,
  getDocs,
  collection,
  where,
  doc,
  addDoc,
  setDoc,
  DocumentReference,
  updateDoc,
} from "firebase/firestore";
import Modal from "../Modal";
import { toast, ToastContainer } from "react-toastify";
import useDecypher from "../../components/useDecypher";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "components/ErrorBoundary";

type stateProps = {
  id: string;
  showEdit: Boolean;
  setShowEdit: Function;
  content: string;
};

const AdminEdit = ({ id, showEdit, setShowEdit, content }: stateProps) => {
  const [aboutValue, setAboutValue] = useState<string>("");
  const [focusName, setFocusName] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    // first
    console.log("content", content);
    console.log("INITIAL", aboutValue);
    setAboutValue(content);
    // return () => {
    // second
    // }
  }, [
    content,
aboutValue
  ]);
  console.log("SECOND", aboutValue);

  const editAboutContent = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // console.log(e);
    // console.log(e.target.value);
    console.log(aboutValue);
    // const updateSlide = async (ImgShudBVisible: boolean, docId: string) => {
    //Create Slide from firestore
    const NewContent = doc(firestore, `About/${id}`);
    // console.log("Slide to Update", Slide);
    // set local variable to switch
    //Try to update doc

    try {
      // alert("I will update slide");
      await updateDoc(NewContent, {
        content: aboutValue,
      });
      toast.success("We've Updated the record About you!");
      setLoading(false);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      // setImageVisible(!ImgShudBVisible);
    } catch (error) {
      console.log(error);
      // }
    }
    //
  };

  return (
    <Modal show={showEdit}>
      <ErrorBoundary>
        {/* <ToastContainer /> */}
        <div
          className={styles.add__slide__form}
          style={{ paddingBottom: "2rem" }}
        >
          {/* <button className="close"> */}
          <button className="close" onClick={() => setShowEdit(!showEdit)}>
            <CgClose />
          </button>
          {/* <form> */}
          <form onSubmit={editAboutContent}>
            <Input
              label="About"
              placeholder="Change your About Section"
              value={aboutValue}
              setValue={setAboutValue}
              focus={focusName}
              setFocus={setFocusName}
              icon={<BiRename />}
              pass={false}
              textare={true}
            />

            <input
              type="submit"
              value="Submit"
              style={{
                cursor: loading ? "not-allowed" : "pointer",
              }}
              disabled={loading}
            />
          </form>
        </div>
      </ErrorBoundary>
    </Modal>
  );
};
export default AdminEdit;
