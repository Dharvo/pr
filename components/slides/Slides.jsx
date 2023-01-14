import { firebase, firestore } from '../../firebase/firebaseConfig'
import React, { useState, useEffect } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import styles from '../../styles/Admin/User.module.scss'
import {
	DocumentData,
	QueryDocumentSnapshot,
	query,
	limit,
	getDocs,
	collection,
	where,
	doc,
} from 'firebase/firestore'
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css'

import img1 from '../../assests/IMG_0849.jpg'
import useSWR from 'swr'
import SlideImage from './SlideImage'
import AddSlide from './AddSlide'
import Loading from '../Loading'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-toastify'
import Router from 'next/router'
import DefaultSlide from './DefaultSlide'
import SlideWrapper from './SlideWrapper'
// import Loading from './Loading'
// import img2 from '../assests/IMG_0851.jpg'
// import img3 from '../assests/IMG_0857.jpg'
// import img5 from '../assests/IMG_1772.jpg'
// import img4 from '../assests/IMG_0856.jpg'

//TODOS
//On load show all images in Slides Firestore
// the ones with visible to true, set their buttons
//update the firestore when check is clicked
//delete from firestore when delete is clicked
//confirm before deleting
//use default to create in firestore collection

const Slides = () => {
	//useSWR(unique key,fnc to fetch data,)
	// const router = useRouter()

	// const [dataSlides, set] = useState([])
	// useEffect(() => {
	// 	// 	// 	// return () => {
	// 	// 	// 	// }
	// 	data && set(data)
	// }, [isValidating])
	// console.log('corresponding result', data)
	// console.log(dataSlides, 'corresponding data', dataSlides.length)
	// router.replace(router.asPath)

	// {}
	// var slideOb =
	// {
	// 	name: 'imaging',
	// 	imgLink: img1,
	// 	visible: true,
	// 	slideId: 'fdkjvbjhdkks',
	// }
	// Router.reload()
	// router.replace(router.asPath)
	//this will reload the page without doing SSR
	// router.refresh();
	return (
		<div className={styles.Module}>
			<h3>Slides</h3>
			<hr />
			<SlideWrapper />
		</div>
	)
}

export default Slides

// function Home(props) {
// 	const { entries } = props
// 	return <h1>entries.title</h1>
// }

// export async function getServerSideProps() {
// }

// export async function getServerSideProps() {
// 	// const reponse =await fetch()
// 	// const entries = await db.collection('blogs').get()
// 	// const entriesData = entries.docs.map((entry) => ({
// 	// 	id: entry.id,
// 	// 	...entry.data(),
// 	// }))
// 	// return {
// 	// 	props: { entries: entriesData },
// 	// }
// 	// // console.log(db)
// 	// const getSlides = async () => {
// 	const slidescollection = collection(firestore, 'Slides')
// 	console.log(slidescollection)
// 	//construct a query to pull slides
// 	const slidesQuery = query(slidescollection, where('visible', '==', 'true'), limit(100))
// 	//Gget the Slides
// 	const SlidesSnapshot = await getDocs(slidesQuery)
// 	//Map thru nd Add to array
// 	const result = []
// 	// const result: QueryDocumentSnapshot<DocumentData>[] = []
// 	SlidesSnapshot.forEach((snap) => result.push(snap))
// 	//Set it to State
// 	// setData(result)
// 	// setLoading(false)
// 	// }
// 	const slidesCollection = collection(firestore, 'Slides')
// 	const result = []
// 	await getDocs(slidesCollection).then((snapshot) => {
// 		snapshot.docs.forEach((snapshot) => {
// 			result.push({ ...snapshot.data(), id: snapshot.id })
// 		})
// 		console.log('corresponding result', result)
// 		// return result
// 	})
// 	return { props: result }
// }

// export async function getStaticProps() {
// 	const reponse = await fetch('')
// 	const data = await reponse.json()
// 	console.log(data)
// 	return { props: { slides: data } }
// }
// export async function getStaticPaths() {
// 	const reponse = await fetch('')
// 	const data = await reponse.json()
// 	console.log(data)
// 	const paths = data.map((slide: string) => {
// 		return { params: { slideId: `${slide}` } }
// 	})
// 	return { paths, fallback: false }
//

//{
// console.log(data.length)Ref
// const [data, setData] = useState([])
// const [loading, setLoading] = useState(true)
// const slidescollection = collection(firestore, 'Slides')
// const { mainUser } = result
// const slidesCol = collection(db, 'Slides')
// // doc(db, 'Slides/Slides')
// console.log('slides', slides)
// console.log('Instance', slidesInstance)
// const snap = getDocs(slidesCol)
// addDoc(dbInstance, {
// 	noteTitle: noteTitle,
// })
// console.log(snap)
// const getData = async () => {
// 	setLoading(true)
// 	try {
// console.log(slidescollection)
//construct a query to pull slides
// const slidesQuery = query(slidescollection, where('visible', '==', 'true'), limit(100))
// //Gget the Slides
// const SlidesSnapshot = await getDocs(slidescollection)
// // console.log(SlidesSnapshot)
// //Map thru nd Add to array
// const result = []
// // const result: QueryDocumentSnapshot<DocumentData>[] = []
// SlidesSnapshot.forEach((snapshot) => {
// 	result.push(snapshot)
// 	console.log('result', snapshot)
// })
// // console.log('result', result[0].data.arguments['Name'])
//2
// await getDocs(doc(firestore, 'Slides', user.id)).then((doc) => {
// 	doc.exists() ? console.log(doc.data()) : console.log('There was an error')
// })
// firebase
// 	.firestore()
// 	.collection('Slides')
// 	.doc('Slides')
// 	.onSnapshot((doc) => console.log(doc.data()))
// 	} catch (error) {
// 		console.log(error)
// 		alert(error)
// 	}
// }

// useEffect(() => {
// 	const slidesCollection = collection(firestore, 'Slides')

// 	const slides = getDocs(slidesCollection).then((snapshot) => {
// 		const result = []
// 		snapshot.docs.forEach((snapshot) => {
// 			result.push({ ...snapshot.data(), id: snapshot.id })
// 		})
// 		console.log('result', result)
// 		return result
// 	})
// 	// getDocs(slidesInstance).then((data) => {
// 	// 	console.log(data)
// 	// })
// 	// 	// getDocs(slidesCol).then((doc) => {
// 	// 	// 	if (doc.exists()) {
// 	// 	// 		console.log(doc.data())
// 	// 	// 	}
// 	// 	// })
// 	// 	// return () => {
// 	// 	// 	second
// 	// 	// }
// }, [])}
