import React, { useState, useEffect } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { CgEditHighlight, CgEditMarkup } from 'react-icons/cg'
import { RiEditCircleFill } from 'react-icons/ri'
import styles from '../../styles/Admin/User.module.scss'
import AboutWrapper from './AboutWrapper'
import AboutEdit from './AboutEdit'
// import styles from '../../styles/Admin/User.module.scss'
import { getDocs, collection } from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css'
import useSWR from 'swr'
// import SlideImage from './SlideImage'
// import AddSlide from './AddSlide'
// import Loading from '../Loading'
import { toast } from 'react-toastify'
import { firestore } from '../../firebase/firebaseConfig'

const fetcher = async () => {
	const AboutContent = collection(firestore, 'About')
	var result = []
	await getDocs(AboutContent)
		.then((snapshot) => {
			snapshot.docs.forEach((snapshot) => {
				result.push({ id: snapshot.id, ...snapshot.data() })
			})
		})
		.catch(function (err) {
			toast.error(`An Error Occured: ${err.message}`)
			console.log('Found error:', err)
		})
	return result
}

const AdminAbout = () => {
	const [showEdit, setShowEdit] = useState(false)

	const { data, error, isValidating } = useSWR('aboutSWR', fetcher)
	useEffect(() => {
		setTimeout(() => {
			data?.length === 0 ? toast.error(`Oops You're Offline...`) : null
		}, 2500)
	}, [isValidating])

	if (error) {
		toast.error(`An Error Occured from useSWR in About: ${error?.message}`)
	}

	return (
		<section className={styles.Module}>
			<div className={styles.AdminAbout}>
				<header>
					<h3>About</h3>
					<span>
						{/* <span className={styles.aboutEdit} onClick={setShowEdit(!showEdit)}> */}
						<CgEditMarkup />
					</span>
				</header>
				<hr />
				<AboutWrapper content={''} />
			</div>
			{/* <AboutEdit showEdit={showEdit} setShowEdit={setShowEdit} content={''} /> */}
		</section>
	)
}

export default AdminAbout
