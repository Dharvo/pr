import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../../styles/Admin/User.module.scss'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BsCheckCircle, BsFillCheckCircleFill } from 'react-icons/bs'
import Loading from '../Loading'
import { firestore } from '../../firebase/firebaseConfig'
import { collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import DeleteSlide from './DeleteSlide'
// type slideProps = { name: string; visible: boolean; imgLink: string; slideId: string }
type slideProps = { slideObj: { id: string; name: string; visible: boolean; imgLink: string } }
// const slidesCollection = collection(firestore, 'Slides')

const SlideImage = ({ slideObj }: slideProps) => {
	const [imageVisible, setImageVisible] = useState<boolean>(false)
	const [del, setDel] = useState<boolean>(false)

	// const SlideImage = ({ name, visible, imgLink, slideId }: slideProps) => {
	// const slideProp = { slideObj }
	const { name, visible, imgLink, id } = slideObj

	// console.log(id)
	const updateSlide = async (seen: boolean, docId: string) => {
		//Create Slide from firestore
		const Slide = doc(firestore, `Slides/${docId}`)
		// set local variable to switch
		setImageVisible((imageVisible) => !imageVisible)
		//Try to update doc
		try {
			alert('I will update slide')
			await updateDoc(Slide, {
				visible: !seen,
			})
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		setImageVisible(visible)

		return () => {}
	}, [])
	return (
		<div className={styles.slides__image}>
			<button
				onClick={() => updateSlide(visible, id)}
				className={`${styles.slides__action__update} ${imageVisible ? styles.visible : ''}`}
			>
				<BsFillCheckCircleFill />
			</button>
			<Image src={imgLink} alt={`${name}-IMAGE`} width={500} height={500} />
			<button onClick={() => setDel((b) => !b)} className={styles.slides__action__delete}>
				<RiDeleteBinLine />
			</button>
			<DeleteSlide docId={id} show={del} setShown={setDel} name={name} />
		</div>
	)
}

export default SlideImage
