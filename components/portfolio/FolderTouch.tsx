import React, { useEffect, useState } from 'react'
import styles from '../../styles/Admin/User.module.scss'
import CrossNav from './CrossNav'
// type Folder = { name: string; fav: boolean }
type Folder = { name: string; fav: boolean; data: string[] }
type FolderArr = { name: string; fav: boolean; data: string[] }[]

type Fold = { folders: FolderArr; fold: string; setFold: Function }
const FolderTouch = ({ folders, fold, setFold }: Fold) => {
	// const [folded, set] = useState<boolean>(false)
	// const [wit, set] = useState<number | undefined>(0)
	// const [high, setHi] = useState<number | undefined>(0)

	//DELIVERABLES INITIALLY ONLY INDEX 0 BE FOLD
	//ON CLICK UPDATE STATE, OF ANY ADD UP WIDTH FOLD, & RELOAD PICTURES
	//ON CLICK BUTTON OF ANY ADD UP WIDTH FOLD, & RELOAD PICTURES
	// function run() {
	// 	set(true)
	// }

	// const [elem, setElem] = useState<Element | null>(null)
	useEffect(() => {
		// window.addEventListener('load', () => {
		// 	setElem(window.document.querySelector("[class*='CrossNav']"))
		// })
		// sortFolder()
		// console.log(shift, unshift)
		// return () => {}
		// const folderTouch = globalThis?.window?.document.querySelector("[class*='folderTouch']")
		// set(folderTouch?.getBoundingClientRect().left)
		// setHi(folderTouch?.getBoundingClientRect().top)
		// console.log(globalThis?.window?.document.querySelector("[class*='crossNav']"))
		// setHi(globalThis?.window?.document.querySelector("[class*='crossNav']")?.clientHeight)
	}, [fold, folders])
	// const sortFolder = () => {
	// 	// const slice =folders
	// 	folders.forEach((folderTab: Folder) => {
	// 		if (fold === folderTab.name) {
	// 			shift.push(folderTab)
	// 			return
	// 		} else {
	// 			unshift.push(folderTab)
	// 		}
	// 	})
	// }
	// console.log(
	// 	globalThis?.window?.document.querySelector("[class*='folderTouch']")?.getBoundingClientRect()
	// 		.left,
	// 	'scrollWidth',
	// 	globalThis?.window?.screenX
	// )

	// console.log(
	// 	globalThis?.window?.document.querySelector("[class*='folderTouch']")?.clientWidth,
	// 	'clientWidth'
	// )

	// console.log(shift)

	return (
		<div className={styles.portfolioNav}>
			{/* {['f','o','d','e','r','s'].filter((foold: { name: string; fav: boolean }) => { */}
			{/* {['o', 'd', 'f', 'e', 'r', 's']
				.filter((foo) => {
					foo === 'f'
				})
				.push(
					...items: string[]): number
					shift
					)} */}

			{/* {folders.map((foold: { name: string; fav: boolean }) => (
				<div className={`${styles.folderTouch} white`}>
					<CrossNav name={foold.name} fav={foold.fav} setFold={setFold} />
				</div>
			))} */}
			{folders.map((folderTab: Folder) => {
				const folded: FolderArr = folders.filter((foold) => foold.name === fold)
				// var fvk = folded[0]
				const Index: number = folders.findIndex((foold) => foold === folded[0])
				// (fvk)

				if (folderTab === folded[0]) {
					return (
						<div key={folderTab.name} className={`${styles.folderTouch} white`}>
							<CrossNav name={folderTab.name} fav={folderTab.fav} setFold={setFold} />
						</div>
					)
				}
				// folders.findIndex((folderTab) => folderTab === folded[0])
				if (folders.indexOf(folderTab) <= Index) {
					return (
						<div key={folderTab.name} className={styles.white}>
							<CrossNav name={folderTab.name} fav={folderTab.fav} setFold={setFold} />
						</div>
					)
				}
				// 		const shift: Folder[] = []
				// 		const unshift: Folder[] = []
				// 	if (fold === folderTab.name) {
				// 	shift.push(folderTab)
				// 	shift.map(foold=>
				// 		//return
				// 		 	<div className={`${styles.folderTouch} white`}>
				// 	 		<CrossNav name={foold.name} fav={foold.fav} setFold={setFold} />
				// 	 	</div>
				// 		)
				// }
				// else {
				// 	unshift.push(folderTab)
				// }
				// return unshift.map(foold=> <CrossNav name={foold.name} fav={foold.fav} setFold={setFold} />
				// 		)
				return (
					<CrossNav
						key={folderTab.name}
						name={folderTab.name}
						fav={folderTab.fav}
						setFold={setFold}
					/>
				)
			})}
			{/* 
				// &&
				// shift.map((foold: { name: string; fav: boolean }) => (
				// 	<div className={`${styles.folderTouch} white`}>
				// 		<CrossNav name={foold.name} fav={foold.fav} setFold={setFold} />
				// 	</div>
				// )
				// )
			{unshift.map((foold: { name: string; fav: boolean }) => (
				<CrossNav name={foold.name} fav={foold.fav} setFold={setFold} />
			))} */}

			{/*
// return <div className={styles.folderTouch}><CrossNav name={foold.name} fav={foold.fav} setFold={setFold} /></div>
				// if (fold === foold.name)
					// set(true)
					// run()
					// return (
							 <span 
							// 	style={
								// 		{
							// 			// width: wit === undefined ? 130 : wit + 400,
							// 			// height: high === undefined ? 50 : high,
							// 		}
							// 	}
							// >
							{/* {foold.name} /}
							// </span>
					)

				// }
				// else if (folded) {
				// 	return <CrossNav name={foold.name} fav={foold.fav} setFold={setFold} />
				// } else {
				return <CrossNav name={foold.name} fav={foold.fav} setFold={setFold} />
				// <div className='colorFold'>
				// </div>
				// }
				// )
				// }
				// console.log('first')

				// folded ? (
				// ) : (
				// )
			})}
		*/}
			{/* {folders.map((foold: { name: string; fav: boolean }) => {
				if (fold === foold.name) {
					return (
						<div className={styles.folderTouch}>
						<span
						style={{
									width: wit === undefined ? 130 : wit + 40,
									height: high === undefined ? 50 : high,
								}}
							>
								{foold.name}
							</span>
						</div>
					)
				} else 
				return <CrossNav name={foold.name} fav={foold.fav} setFold={setFold} />

				// if (
				// 	// folders.indexOf(foold) === 0 ||
				// 	folders.indexOf(foold) === 1 ||
				// 	folders.indexOf(foold) === 2
				// )
				// else return <span>{foold}</span>
			})} */}
			{/* <div className={styles.folderTouch}>
			<span
			style={{
					width: wit === undefined ? 130 : wit + 40,
					height: high === undefined ? 50 : high,
				}}
				/>
			</div> */}
		</div>
	)
}

export default FolderTouch
