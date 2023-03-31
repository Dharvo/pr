import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Input from "../Input";
import { BiRename } from "react-icons/bi";
import styles from "../../styles/Admin/User.module.scss";
import { CgClose } from "react-icons/cg";
import { firebase, firestore, storage } from "../../firebase/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  DocumentData,
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
  deleteDoc,
} from "firebase/firestore";
import Modal from "../Modal";
import Loading from "components/Loading";
import { toast } from "react-toastify";
type delProps = {
  show: boolean;
  setShown: Function;
  name: string;
  docId: string;
};
// import React from "react";
// import { CgClose, CgCloseO, CgCloseR } from "react-icons/cg";

const DeletePort = ({ show, setShown, name, docId }: delProps) => {
  //   return (
  //     <button title={`Delete ${name} portfolio`}>
  //       <CgCloseR />
  //     </button>
  //   );
  // };

  // const DeleteSlide = ({ show, setShown, name, docId }: modal["props"]) => {

  // const [verify, setVerify] = useState<string>('')
  // const [focusName, setFocusName] = useState<boolean>(false)

  //Import Storage
  // import { storage } from './firebase';
  // Let’s write a function that will run when a user hits the submit button:

  // const createSlide = async (e: any) => {
  // 	// const handleSubmit = (e) => {
  // 	e.preventDefault()
  // 	const file = e.target[1]?.files[0]

  // 	if (!file) return

  // 	const storageRef = ref(storage, `Slides/${file.name}`)
  // 	const uploadTask = uploadBytesResumable(storageRef, file)

  // 	uploadTask.on(
  // 		'state_changed',
  // 		(snapshot) => {
  // 			const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
  // 			setProgresspercent(progress)
  // 		},
  // 		(error) => {
  // 			alert(error)
  // 		},

  // 		async () => {
  // 			await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  // 				setImgUrl(downloadURL)
  // 			})
  // 		}
  // 	)

  // 	//ADD TO FIRESTORE
  // 	const payload = {
  // 		name: name,
  // 		imgLink: imgUrl,
  // 		visible: true,
  // 	}
  // 	console.table(payload)

  // 	const SlidesList: DocumentReference<DocumentData> = doc(firestore, 'Slides/')

  // 	// const slidesCollection = collection(firestore, 'Slides')
  // 	// addDoc(slidesCollection, payload)
  // 	// 	.then((data) => console.log(data))
  // 	// 	.catch((err) => console.error)
  // 	// }

  // 	await setDoc(SlidesList, payload)
  // 		.then((data) => console.log(data))
  // 		.catch((err) => console.error(err))
  // 	console.log('Data sending successful')
  // 	// console.log('file', !file)
  // 	//Reset Input Fields
  // }
  const verifyDelete = (docId: string) => {
    const Portfolio = doc(firestore, `Portfolio/${docId}`);
    deleteDoc(Portfolio);
    setShown(!show);
    toast.loading("Deleting Portfolio ...");
    // window.scrollY = 0;
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };
  // var elem: any
  // useEffect(() => {
  // 	elem = window.document.getElementById('portal')
  // }, [])

  // const isSSR = typeof window === 'undefined'
  // const doc = globalThis?.window?.document

  // if (doc === undefined) return <Loading prop={false} />
  // } else {
  // console.log(isSSR, )
  // return ''
  // const elem: any = globalThis?.window?.document.getElementById('portal')
  // const DeleteSlide = ({props}:modal) => {
  return (
    <Modal show={show}>
      {/* <div className='portal'> */}
      <div className={styles.add__slide__form}>
        <button onClick={() => setShown(!show)}>
          <CgClose />
        </button>
        <h2>
          Are you sure you want to delete this Portfolio <br />
          {name}
        </h2>
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
      {/* </div> */}
    </Modal>
  );

  // const elem: any = window.document.getElementById('portal')
  // elem
  // window.document.getElementById('portal')
  // }
};

export default DeletePort;
