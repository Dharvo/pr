import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Input from "../Input";
import { BiRename } from "react-icons/bi";
import styles from "../../styles/Admin/User.module.scss";
import { CgClose } from "react-icons/cg";
import {
  firebase,
  firestore,
  PortfoliosCollection,
  storage,
} from "../../firebase/firebaseConfig";
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
} from "firebase/firestore";
import Modal from "../Modal";
import { toast, ToastContainer } from "react-toastify";
import useDecypher from "../useDecypher";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "components/ErrorBoundary";
// import Loading from 'components/Loading'
type modal = {
  props: {
    show: boolean;
    setShown: Function;
  };
};

const AddFolder = ({ show, setShown }: modal["props"]) => {
  const [name, setName] = useState<string>("");
  const [focusName, setFocusName] = useState<boolean>(false);

  const createFolder = async (e: any) => {
    // {	// const handleSubmit = (e) => {
    e.preventDefault();

    // 	const file = e.target[1]?.files[0]
    if (!name) {
      toast.error("Please Add a Name");
      return;
    }
    // 	if (!file) {
    // 		toast.error('Please Add an Image')
    // 		return
    // 	}
    // 	const storageRef = ref(storage, `Slides/${name}`)
    // 	const uploadTask = uploadBytesResumable(storageRef, file)

    // 	navigator.onLine
    // 		? uploadTask.on(
    // 				'state_changed',
    // 				(snapshot) => {
    // 					const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    // 					setProgresspercent(progress)
    // 				},
    // 				(error) => {
    // 					alert(error)
    // 				},

    // 				async () => {
    // 					await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    // 						setImgUrl(downloadURL)
    // 					})
    // 				}
    // 		  )
    // ADD TO FIRESTORE
    const payload = {
      Title: name,
      Favourite: false,
      Images: [],
    };
    toast.loading;

    !navigator.onLine
      ? toast.error(`Unsuccessful, You're Offline...`)
      : await addDoc(PortfoliosCollection, payload)
          .catch((err) => {
            console.log(`Error Found: `, err);
          })
          .finally(() => toast.success("Successfully Created Folder"));

    //CLEAR INOUT, CLOSE MODAL

    // const createFold = () => {
    // 	const portCollection: CollectionReference<DocumentData> = collection(firestore, 'Portfolio/')
    // }

    // 	// console.log(`new Errorrrr`)

    // 	try {
    // 		if (navigator.onLine) {
    // 			await addDoc(collection(slidesCollection, '/'), payload).catch((err) => {
    // 				console.log(`Error Found: `, err)
    // 			})
    // 			toast.success('Image Upload Successful')
    // 		}
    // 		toast.error(`Ooops You're Offline...`)
    // 		// !
    // 		// 	? null
    // 		// 	:
    // 		// .then((data: DocumentReference<DocumentData>) =>console.log(data))
    // 		// onfulfilled ?: ((data: DocumentReference<DocumentData>) =>
    // 		// , onrejected?: ((err){
    // 		// 	if (err?.code === 'auth/invalid-email') {
    // 		// 			toast.error('Wrong! Please use a valid email')
    // 		// 		} else if (err?.code === 'auth/wrong-password') {
    // 		// 				toast.error('Wrong! Try another password')
    // 		// 			} else if (err?.code === 'auth/network-request-failed') {
    // 		// 					toast.error('Oops, You are Offline')
    // 		// 				} else {
    // 		// 						toast.error(err)
    // 		// 					}// 				}
    // 	} catch (err) {
    // 		console.log(`new Error `, err)
    // 		// .catch(
    // 		// function (err) {
    // 		// 	if (err?.code === 'auth/invalid-email') {
    // 		// 		toast.error('Wrong! Please use a valid email')
    // 		// 	} else if (err?.code === 'auth/wrong-password') {
    // 		// 		toast.error('Wrong! Try another password')
    // 		// 	} else if (err?.code === 'auth/network-request-failed') {
    // 		// 		toast.error('Oops, You are Offline')
    // 		// 	} else {
    // 		// 		toast.error(err)
    // 		// 	}
    // 		// 	// }
    // 		// 	console.log('We have found an error')
    // 		// 	console.log('We have found an error')
    // 		// 	// useDecypher(error.code)
    // 		// }
    // 		// (err) => useDecypher(err)
    // 		// )
    // 		// .catch((err) => {
    // 		// 	// useDecypher(err?.code)
    // 		// 	console.log(`Error Found: `, err)
    // 		// })
    // 		// } catch (err) {
    // 		// 	console.log(`new Error ${err}`)
    // 	}
    // 	setTimeout(() => {
    // 		//Reset Input Fields
    // 		//Close Modal
    // 		//Reset progresspercent n img link to ''
    // 		setName('')
    // 		setImgUrl('')
    // 		setShown(!show)
    // 		setProgresspercent(0)
    // 	}, 10000)
    // 	// console.log(error)
    // 	// useDecypher(error)9

    // }
  };
  const closeModal = () => {
    setShown(!show);
    setName("");
  };

  return (
    <Modal show={show}>
      <ErrorBoundary>
        <div className={styles.add__slide__form}>
          <button className="close" onClick={closeModal}>
            <CgClose />
          </button>
          <h2>Create a Portfolio Folder</h2>
          <span>
            <small>
              NOTE: This will be the default name of the folder which will
              contain any pictures you add here
            </small>
          </span>
          <form onSubmit={createFolder}>
            <Input
              label="Folder Name"
              placeholder="Create a  Portfolio Name"
              value={name}
              setValue={setName}
              focus={focusName}
              setFocus={setFocusName}
              icon={<BiRename />}
              pass={false}
            />
            <input type="submit" value="Create" />
          </form>
        </div>
      </ErrorBoundary>
    </Modal>
  );
};

export default AddFolder;
