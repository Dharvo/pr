import Authenticate from './Authenticate'
import Footer from '../../components/Footer'
// import Loading from 'components/Loading'
import UbuntuPage from '../../components/Ubuntu'
import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Admin/Admin.module.scss'
//  console.log(initFirebase())
function Admin() {
	return (
		<section id={styles.admin}>
			{/* <p className={styles.logo}> */}
			<p className='logo'>
				<Link passHref href='./'>
					pr
				</Link>
			</p>
			<h1>Please Identify Yourself</h1>
			<Authenticate />
			<UbuntuPage />
		</section>
	)
}

export default Admin

Admin.getLayout = function PageLayout(page: React.FC) {
	return (
		<>
			{page}
			<Footer />
		</>
	)
}

// import { useState } from 'react'

// function App() {
// 	const [file, setFile] = useState('')

// 	// Handles input change event and updates state
// 	function handleChange(event) {
// 		setFile(event.target.files[0])
// 	}

// 	return (
// 		<div>
// 			<input type='file' accept='image/*' onChange={handleChange} />
// 			<button>Upload to Firebase</button>
// 		</div>
// 	)
// }
// export default App

// function handleUpload() {
// 	if (!file) {
// 		alert('Please choose a file first!')
// 	}
// }

// import storage from './firebaseConfig.js'

// import { ref } from 'firebase/storage'

// function handleUpload() {
// 	if (!file) {
// 		alert('Please choose a file first!')
// 	}

// 	const storageRef = ref(storage, `/files/${file.name}`)
// }

// import { ref, uploadBytesResumable } from 'firebase/storage'

// function handleUpload() {
// 	if (!file) {
// 		alert('Please choose a file first!')
// 	}

// 	const storageRef = ref(storage, `/files/${file.name}`)
// 	const uploadTask = uploadBytesResumable(storageRef, file)
// }

// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

// function handleUpload() {
// 	if (!file) {
// 		alert('Please choose a file first!')
// 	}

// 	const storageRef = ref(storage, `/files/${file.name}`)
// 	const uploadTask = uploadBytesResumable(storageRef, file)

// 	uploadTask.on(
// 		'state_changed',
// 		(snapshot) => {
// 			const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)

// 			// update progress
// 			setPercent(percent)
// 		},
// 		(err) => console.log(err),
// 		() => {
// 			// download url
// 			getDownloadURL(uploadTask.snapshot.ref).then((url) => {
// 				console.log(url)
// 			})
// 		}
// 	)
// }

// import { useState } from 'react'

// function App() {
// 	const [percent, setPercent] = useState(0)

// 	return (
// 		<div>
// 			<input type='file' onChange={handleChange} accept='' />
// 			<button onClick={handleUpload}>Upload to Firebase</button>
// 			<p>{percent} "% done"</p>
// 		</div>
// 	)
// }

// import { useState } from 'react'
// import { storage } from './firebaseConfig'
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

// function App() {
// 	// State to store uploaded file
// 	const [file, setFile] = useState('')

// 	// progress
// 	const [percent, setPercent] = useState(0)

// 	// Handle file upload event and update state
// 	function handleChange(event) {
// 		setFile(event.target.files[0])
// 	}

// 	const handleUpload = () => {
// 		if (!file) {
// 			alert('Please upload an image first!')
// 		}

// 		const storageRef = ref(storage, `/files/${file.name}`)

// 		// progress can be paused and resumed. It also exposes progress updates.
// 		// Receives the storage reference and the file to upload.
// 		const uploadTask = uploadBytesResumable(storageRef, file)

// 		uploadTask.on(
// 			'state_changed',
// 			(snapshot) => {
// 				const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)

// 				// update progress
// 				setPercent(percent)
// 			},
// 			(err) => console.log(err),
// 			() => {
// 				// download url
// 				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
// 					console.log(url)
// 				})
// 			}
// 		)
// 	}

// 	return (
// 		<div>
// 			<input type='file' onChange={handleChange} accept='/image/*' />
// 			<button onClick={handleUpload}>Upload to Firebase</button>
// 			<p>{percent} "% done"</p>
// 		</div>
// 	)
// }

// export default App

// In index.js, configure react-router-dom:

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
// import Login from "./Login";
// import Profile from "./Profile";
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="login" element={<Login />} />
//           <Route path="profile" element={<Profile />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// In the src folder, add AuthContext.js file and create and export AuthContext.

// import { createContext } from "react";
// const AuthContext = createContext();
// export default AuthContext;
// Next, create the provider in AuthProvider.js. It will allow components to use AuthContext.

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useState, useEffect } from 'react';
// import AuthContext from './AuthContext'
// const auth = getAuth()
// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     useEffect(() => {
//         onAuthStateChanged(auth,(user) => {
//             setUser(user)
//         })
//     }, []);

//     return (
//       <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//     );
//   };

//   import { AuthProvider } from "./AuthProvider";
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="login" element={<Login />} />
//           <Route path="profile" element={<Profile />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//     ,
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// Create Protected Routes
// To protect sensitive routes, check the authentication status of a user trying to navigate to a protected page like the profile page.

// Modify Profile.js to redirect a user if they are not authenticated.

// import { useContext } from "react";
// import AuthContext from "./AuthContext";
// import { useNavigate, Navigate } from "react-router-dom";
// import { signOut } from "./firebase";
// const Profile = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const handleLogout = async () => {
//    await signOut();
//   };
//   if (!user) {
//     return <Navigate replace to="/login" />;
//   }
//   return (
//     <>
//       <h1>Profile</h1>
// 			<button onClick={handleLogout}>Logout</button>
//     </>
//   );
// };
// export default Profile;
