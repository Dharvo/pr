// import { FirebaseApp, initFirebase } from '../firebaseConfig'
// import { useState, useEffect } from 'react'
// import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// import { getAuth } from 'firebase/auth'
// import { signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import { setUserCookie } from '@/lib/firebase/userCookies'
// import { mapUserData } from '@/lib/firebase/mapUserData'
// const auth = getAuth()
// var defaultAuth = firebase.auth
// var defaultAuth =getAuth()
import { initFirebase } from '../../firebase/firebaseConfig'
initFirebase()

const FirebaseAuthConfig = {
	signInflow: 'popup',
	signInOptions: [
		{ provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
	signInSuccessUrl: '/admin/Panel',
	credentialHelper: 'none',
	callbacks: {
		signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
			const userData = formatAuthUser(user)
			console.log(userData)
			// setUserCookie(userData)
		},
	},
}

// const formatAuthUser = (user) => {
// 	const { uid, email, xa, displayName, photoUrl } = user
// 	return {
// 		id: uid,
// 		email: email,
// 		token: xa,
// 		name: displayName,
// 		profilePic: photoUrl,
// 	}
// }

// export default function useFirebaseAuth() {
// 	const [authUser, setAuthUser] = useState('')
// 	const [loading, setLoading] = useState(true)

// 	const firebaseAuth = getAuth()

// 	const authStateChanged = async (authState) => {
// 		if (!authState) {
// 			setAuthUser(null)
// 			setLoading(false)
// 			return
// 		}
// 		setLoading(true)
// 		var formattedUser = formatAuthUser(authState)
// 		setAuthUser(formattedUser)
// 		setLoading(false)
// 	}

// 	const clear = () => {
// 		setAuthUser(null)
// 		setLoading(true)
// 	}

// 	const signIn = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password)

// 	const signOut = () => firebaseAuth.signOut().then(clear)

// 	useEffect(() => {
// 		// const unsubscribe =  firebase.auth().onAuthStateChanged(authStateChanged)
// 		const unsubscribe = firebaseAuth.onAuthStateChanged(authStateChanged)
// 		return () => unsubscribe()
// 	}, [])

// 	return { authUser, loading, signIn, signOut }
// }

const FirebaseAuth = () => {
	// Do not SSR FirebaseUI, because it is not supported.
	const [renderAuth, setRenderAuth] = useState(false)
	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		setRenderAuth(true)
	// 	}
	// }, [])
	return (
		<div>
			{/* {renderAuth ? (
				<StyledFirebaseAuth uiConfig={FirebaseAuthConfig} firebaseAuth={firebase.auth()} />
			) : (
				'null'
			)} */}
			null
		</div>
	)
}

export default FirebaseAuth
