import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { CgEditHighlight, CgEditMarkup } from 'react-icons/cg'
import { RiEditCircleFill } from 'react-icons/ri'
import styles from '../../styles/Admin/User.module.scss'
import AboutWrapper from './AboutWrapper'

import ReactDOM from 'react-dom'
import Input from '../Input'
import { BiRename } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { firebase, firestore, storage } from '../../firebase/firebaseConfig'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
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
} from 'firebase/firestore'
import Modal from '../Modal'
import { toast, ToastContainer } from 'react-toastify'
import useDecypher from '../../components/useDecypher'
import 'react-toastify/dist/ReactToastify.css'
import ErrorBoundary from 'components/ErrorBoundary'

type stateProps = {
	showEdit: Boolean
	setShowEdit: Function
}

const AdminEdit = ({ showEdit, setShowEdit }: stateProps) => {
	return (
		<Modal show={showEdit}>
			<ErrorBoundary>
				<div className={styles.add__slide__form}>
					<button className='close'>
						{/* <button className="close" onClick={setShowEdit(!showEdit)}> */}
						<CgClose />
					</button>
					<form>
						{/* <form onSubmit={createSlide}> */}
						{/* <Input
							label='Image Name'
							placeholder='Set a Name'
							value={name}
							setValue={setName}
							focus={focusName}
							setFocus={setFocusName}
							icon={<BiRename />}
							pass={false}
						/> */}
						<input type='submit' value='Submit' />
					</form>
				</div>
			</ErrorBoundary>
		</Modal>
	)
}
export default AdminEdit
