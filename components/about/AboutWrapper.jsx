import React, { useState, useEffect } from 'react'
// import styles from '../../styles/Admin/User.module.scss'
import { getDocs, collection } from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css'
import useSWR from 'swr'
// import SlideImage from './SlideImage'
// import AddSlide from './AddSlide'
// import Loading from '../Loading'
import { toast } from 'react-toastify'
import { firestore } from '../../firebase/firebaseConfig'

const AboutWrapper = (content) => {
	if (content == '') {
		toast.loading()
		return (
			<>
				<div className={styles.loading__div}>
					<Loading props={true} />
				</div>
			</>
		)
	}
	return <p>{content && <br />}</p>
}

export default AboutWrapper
