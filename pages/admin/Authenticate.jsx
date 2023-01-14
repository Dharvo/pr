import React, { useState, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth'
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, app } from '../../firebase/firebaseConfig'
import firebase from 'firebase/compat/app'
import { BsPersonBoundingBox, BsShieldLockFill } from 'react-icons/bs'
import styles from '../../styles/Admin/Admin.module.scss'
import Input from 'components/Input'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDecypher } from '../../components/useDecypher'

const Authenticate = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [focus1, setFocused1] = useState(false)
	const [focus2, setFocused2] = useState(false)
	const router = useRouter()

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (email === '' && password === '') {
			toast.error('Please enter your email and password')
		} else if (email === '') {
			toast.error('Please enter your email address')
		} else if (password === '') {
			toast.error('Please enter your password')
		} else {
			//IF THEY ARE BOTH FILLED TRY ND CATCH SIGN IN
			const Authenticator = toast.loading('Authenticating')
			console.log('signing user in now')
			signInWithEmailAndPassword(auth, email, password)
				.then((authenticatedUser) => {
					console.log(authenticatedUser)
					router.push('/admin/Panel')
				})
				.catch(function (error) {
					console.log('We have found an error')
					// useDecypher(error)
					toast.dismiss(Authenticator)
					var errorCode = error.code
					if (errorCode === 'auth/invalid-email') {
						toast.dismiss(Authenticator)
						toast.error('Wrong! Please use a valid email')
					} else if (errorCode === 'auth/wrong-password') {
						toast.error('Wrong! Try another password')
						toast.dismiss(Authenticator)
					} else if (errorCode === 'auth/network-request-failed') {
						toast.error('Oops, You are Offline')
						toast.dismiss(Authenticator)
					} else {
						toast.error(errorMessage)
						toast.dismiss(Authenticator)
					}
				})
		}
	}
	const FirebaseAuthConfig = {
		signInflow: 'popup',
		signInOptions: [GoogleAuthProvider.PROVIDER_ID],
		signInSuccessUrl: '/admin/Panel',
		credentialHelper: 'none',
	}

	return (
		<>
			<ToastContainer />
			<form onSubmit={handleSubmit}>
				<Input
					label='Admin Name'
					placeholder='Admin Email'
					value={email}
					setValue={setEmail}
					focus={focus1}
					setFocus={setFocused1}
					icon={<BsPersonBoundingBox />}
				/>
				<Input
					label='Secret key'
					placeholder='Admin Password'
					value={password}
					setValue={setPassword}
					focus={focus2}
					setFocus={setFocused2}
					icon={<BsShieldLockFill />}
					pass={true}
				/>
				<input type='submit' value='Authenticate' />
			</form>
			<div className={styles.googleLink}>
				<StyledFirebaseAuth uiConfig={FirebaseAuthConfig} firebaseAuth={auth} />
			</div>
			<p className={styles.home}>
				or Go <a href='./'>Home</a>
			</p>
		</>
	)
}
export default Authenticate
