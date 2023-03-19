import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Input from "../Input";
import { BiRename } from "react-icons/bi";
import styles from "../../styles/Admin/User.module.scss";
import { CgClose } from "react-icons/cg";
import {
  firebase,
  firestore,
  slidesCollection,
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
import Modal from "../Modal";
import { toast, ToastContainer } from "react-toastify";
import useDecypher from "../../components/useDecypher";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "components/ErrorBoundary";
// import Loading from 'components/Loading'
type modal = {
  props: {
    show: boolean;
    setShown: Function;
  };
};

const AddSlide = ({ show, setShown }: modal["props"]) => {
  const [name, setName] = useState<string>("");
  const [focusName, setFocusName] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [progresspercent, setProgresspercent] = useState<number>(0);

  //Import Storage
  // import { storage } from './firebase';
  // Let’s write a function that will run when a user hits the submit button:

  const createSlide = async (e: any) => {
    // const handleSubmit = (e) => {
    e.preventDefault();

    const file = e.target[1]?.files[0];
    if (!name) {
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
                  setName("");
                  setImgUrl("");
                  setShown(!show);
                  setProgresspercent(0);
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
      imgLink: downloadURL,
      name: name,
      visible: true,
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
    await addDoc(slidesCollection, payload)
      .catch((err) => {
        console.log(`Error Found: `, err);
      })
      .finally(() => toast.success("Image Upload Successful"));
    // };
  };
  // !
  // 	? null
  // 	:
  // .then((data: DocumentReference<DocumentData>) =>console.log(data))
  // onfulfilled ?: ((data: DocumentReference<DocumentData>) =>
  // , onrejected?: ((err){
  // 	if (err?.code === 'auth/invalid-email') {
  // 			toast.error('Wrong! Please use a valid email')
  // 		} else if (err?.code === 'auth/wrong-password') {
  // 				toast.error('Wrong! Try another password')
  // 			} else if (err?.code === 'auth/network-request-failed') {
  // 					toast.error('Oops, You are Offline')
  // 				} else {
  // 						toast.error(err)
  // 					}// 				}
  // .catch(
  // function (err) {
  // 	if (err?.code === 'auth/invalid-email') {
  // 		toast.error('Wrong! Please use a valid email')
  // 	} else if (err?.code === 'auth/wrong-password') {
  // 		toast.error('Wrong! Try another password')
  // 	} else if (err?.code === 'auth/network-request-failed') {
  // 		toast.error('Oops, You are Offline')
  // 	} else {
  // 		toast.error(err)
  // 	}
  // 	// }
  // 	console.log('We have found an error')
  // 	console.log('We have found an error')
  // 	// useDecypher(error.code)
  // }
  // (err) => useDecypher(err)
  // )
  // .catch((err) => {
  // 	// useDecypher(err?.code)
  // 	console.log(`Error Found: `, err)
  // })
  // } catch (err) {
  // 	console.log(`new Error ${err}`)
  // var elem: any = document.querySelector('#portal')
  // .getElementById('portal')
  // var elem: any = document.getElementById('portal')
  // useEffect(() => {
  // }, [])

  // const AddSlide = ({props}:modal) => {
  // if (typeof window === 'undefined') return <Loading prop={false} />

  // const elem: any = globalThis?.window?.document.getElementById('portal')

  const closeModal = () => {
    setShown(!show);
    setName("");
    setProgresspercent(0);
  };

  return (
    <Modal show={show}>
      {/* <ToastContainer /> */}
      <ErrorBoundary>
        <div className={styles.add__slide__form}>
          <button className="close" onClick={closeModal}>
            <CgClose />
          </button>
          <form onSubmit={createSlide}>
            <Input
              label="Image Name"
              placeholder="Set a Name"
              value={name}
              setValue={setName}
              focus={focusName}
              setFocus={setFocusName}
              icon={<BiRename />}
              pass={false}
            />
            <input type="file" name={name} id={`${name}-ID`} />
            <input type="submit" value="Submit" />
          </form>

          {/* {imgUrl && <div>{imgUrl}</div>} */}
          {/* <> */}
          {/* <span */}
          <div
            style={{
              width: `${progresspercent}%`,
              height: "4px",
              border: "0.5px solid #777",
              backgroundColor: "#333",
              borderRadius: "3px",
            }}
          />
          {imgUrl && <div>Image upload successfull, Find at `{imgUrl}`</div>}
          {/* </div> */}
        </div>
      </ErrorBoundary>

      {/* </> */}
    </Modal>
    // <>
    // 	{show
    // 		? ReactDOM.createPortal(
    // 				<div className='portal'>

    // 				</div>,
    // 				elem
    // 				// document.querySelector('#portal')
    // 				// Window.prototype.document.getElementById('portal')
    // 				// .getElementById('portal')
    // 		  )
    // 		: ''}
    // </>
  );
};

export default AddSlide;
