import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Input from '../Input'
import { BiRename } from 'react-icons/bi'
import styles from '../../styles/Admin/User.module.scss'
import { CgClose } from 'react-icons/cg'
import { firebase, firestore, storage } from '../../firebase/firebaseConfig'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
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
} from 'firebase/firestore'
import Modal from '../Modal'
// import Loading from 'components/Loading'
type modal = {
	props: {
		show: boolean
		setShown: Function
	}
}

const AddSlide = ({ show, setShown }: modal['props']) => {
	const [name, setName] = useState<string>('')
	const [focusName, setFocusName] = useState<boolean>(false)
	const [imgUrl, setImgUrl] = useState<string>('')
	const [progresspercent, setProgresspercent] = useState<number>(0)

	//Import Storage
	// import { storage } from './firebase';
	// Let’s write a function that will run when a user hits the submit button:

	const createSlide = async (e: any) => {
		// const handleSubmit = (e) => {
		e.preventDefault()
		const file = e.target[1]?.files[0]

		if (!file) return

		const storageRef = ref(storage, `Slides/${file.name}`)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
				setProgresspercent(progress)
			},
			(error) => {
				alert(error)
			},

			async () => {
				await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImgUrl(downloadURL)
				})
			}
		)

		//ADD TO FIRESTORE
		const payload = {
			name: name,
			imgLink: imgUrl,
			visible: true,
		}
		console.table(payload)

		const SlidesList: DocumentReference<DocumentData> = doc(firestore, 'Slides/')

		// const slidesCollection = collection(firestore, 'Slides')
		// addDoc(slidesCollection, payload)
		// 	.then((data) => console.log(data))
		// 	.catch((err) => console.error)
		// }

		await setDoc(SlidesList, payload)
			.then((data) => console.log(data))
			.catch((err) => console.error(err))
		console.log('Data sending successful')
		// console.log('file', !file)
		//Reset Input Fields
	}
	// var elem: any = document.querySelector('#portal')
	// .getElementById('portal')
	// var elem: any = document.getElementById('portal')
	// useEffect(() => {
	// }, [])

	// const AddSlide = ({props}:modal) => {
	// if (typeof window === 'undefined') return <Loading prop={false} />

	// const elem: any = globalThis?.window?.document.getElementById('portal')
	return (
		<Modal show={show}>
			<div className={styles.add__slide__form}>
				<button className='close' onClick={() => setShown(!show)}>
					<CgClose />
				</button>
				<form onSubmit={createSlide}>
					<Input
						label='Image Name'
						placeholder='Set a Name'
						value={name}
						setValue={setName}
						focus={focusName}
						setFocus={setFocusName}
						icon={<BiRename />}
						pass={false}
					/>
					<input type='file' name={name} id={`${name}-ID`} />
					<input type='submit' value='Submit' />
				</form>
				{imgUrl && <div>{imgUrl}</div>}
			</div>
			<>
				<span
					style={{
						width: `${progresspercent}px`,
						height: '7px',
						border: '0.5px solid #aaa',
						backgroundColor: '#777',
						borderRadius: '3px',
					}}
				></span>
			</>
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
	)
}

export default AddSlide
