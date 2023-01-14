// import { getAuth, signOut } from 'firebase/auth'
// // import signOut from 'firebase/
// import { fireStore } from '../../firebase/firebaseConfig'
// import useFirebaseAuth from '../../firebase/auth/FirebaseAuth'
// import {
// 	collection,
// 	QueryDocumentSnapshot,
// 	DocumentData,
// 	query,
// 	limit,
// 	getDocs,
// } from 'firebase/firestore'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { auth } from '../../firebase/firebaseConfig'
import Footer from 'components/Footer'
import styles from '../../styles/Admin/User.module.scss'
// import { getAuth } from 'firebase/auth'
import Link from 'next/link'
import UbuntuPage from 'components/Ubuntu'
import Slides from '../../components/slides/Slides'
import Portfolio from '../../components/portfolio/Portfolio'
import AdminContact from 'components/contact/AdminContact'
import AdminReviews from 'components/reviews/AdminReviews'
import AdminAbout from 'components/reviews/About'
import Options from 'components/Options'
import { BsBrightnessLow, BsShieldLockFill } from 'react-icons/bs'
import ErrorBoundary from 'components/ErrorBoundary'
// const Reviews = collection(fireStore, 'Reviews')
// console.log(Reviews)
// import { removeUserCookie, setUserCookie, getUserFromCookie } from '../../firebase/auth/UserCookies'
//CHECK IF AUTH TOKEN IS AVAILABLE THEN RETURN PANEL ELSE RETURN TO ADMIN
const Panel = () => {
	// const auth = getAuth()
	// const handleLogout = async () => {
	// 	await signOut(auth)
	// }
	// const { authUser, loading, signOut } = useFirebaseAuth()
	const router = useRouter()

	const [mainUser, setUser] = useState({})
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)
	// const auth = getAuth()

	const formatAuthUser = (user) => {
		const { uid, email, accessToken, displayName, photoUrl } = user
		return {
			id: uid,
			email: email,
			token: accessToken,
			name: displayName,
			profilePic: photoUrl,
		}
	}

	const logout = async () => {
		try {
			await auth.signOut()
			// removeUserCookie
			router.push('/admin')
		} catch (e) {
			setError(e)
			// console.log(e.message)
		}
	}

	useEffect(() => {
		// Firebase updates the id token every hour, this
		// makes sure the react state and the cookie are
		// both kept up to date
		console.log('listening to authentication')
		const cancelAuthListener = auth.onIdTokenChanged((user) => {
			if (user) {
				const userData = formatAuthUser(user)
				setUser(userData)
				return
			} else {
				router.push('/admin')
				setUser()
			}
		})
		// const cancelAuthListener = auth.onIdTokenChanged((user) => {
		// 	if (user) {
		// 		const userData = formatAuthUser(user)
		// 		setUserCookie(userData)
		// 		setUser(userData)
		// 	} else {
		// 		setUser()
		// 		removeUserCookie()
		// 	}
		// })

		// const userFromCookie = getUserFromCookie()
		// if (!userFromCookie) {
		// 	router.push('/admin')
		// 	return
		// }
		// setUser(userFromCookie)

		return () => {
			cancelAuthListener()
		}
		// }, [user, loading])
	}, [])
	// useEffect(() => {
	// console.log(user, loading)
	// if (!loading && !user) router.push('/admin')
	// }, [authUser, loading])
	// console.log(user, 'profilePic')
	return (
		<div className={styles.user}>
			<p className='logo'>
				<Link passHref href='./'>
					pr
				</Link>
			</p>
			<h1>
				Welcome Admin,
				<span> {mainUser?.name?.split(' ')[0]}</span>
			</h1>
			{/* <img src={user?.profilePic} alt={user?.name} width={200} height={200} /> */}

			{/* <button onClick={logout}>Logout</button> */}
			<Slides />
			{/* <Slides user={mainUser} /> */}
			<Portfolio />
			<AdminContact />
			<AdminReviews />
			<AdminAbout />
			<Options name='Change Password' icon={() => <BsShieldLockFill />} />
			<Options name='Theme' icon={() => <BsBrightnessLow />} />
			<UbuntuPage />
		</div>
	)
	// return { user,error, logout }
}
export default Panel

Panel.getLayout = function PageLayout(page) {
	return (
		<>
			{/* <ErrorBoundary> */}
			{page}
			<Footer />
			{/* </ErrorBoundary> */}
		</>
	)
}

// const signOut = async () => {
// 	try {
// 		await signOut()
// 		return true
// 	} catch (error) {
// 		return false
// 	}
// }
