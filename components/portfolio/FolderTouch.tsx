import React, { useEffect, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import styles from '../../styles/Admin/User.module.scss'
import AddFolder from './AddFolder'
import CrossNav from './CrossNav'
type Folder = { name: string; fav: boolean; data: string[] }
type FolderArr = { name: string; fav: boolean; data: string[] }[]

type Fold = { folders: FolderArr; fold: string; setFold: Function }
const FolderTouch = ({ folders, fold, setFold }: Fold) => {
	const [show, setShown] = useState<boolean>(false)
	//DELIVERABLES INITIALLY ONLY INDEX 0 BE FOLD
	//ON CLICK UPDATE STATE, OF ANY ADD UP WIDTH FOLD, & RELOAD PICTURES
	//ON CLICK BUTTON OF ANY ADD UP WIDTH FOLD, & RELOAD PICTURES
	useEffect(() => {}, [fold, folders])

	return (
		<div className={styles.portfolioNav}>
			<div>
				{folders!.map((folderTab: Folder) => {
					const folded: FolderArr = folders.filter((foold) => foold.name === fold)
					const Index: number = folders.findIndex((foold) => foold === folded[0])

					if (folderTab === folded[0]) {
						return (
							<div key={folderTab.name} className={`${styles.folderTouch} white`}>
								<CrossNav name={folderTab.name} fav={folderTab.fav} setFold={setFold} />
							</div>
						)
					}
					if (folders.indexOf(folderTab) <= Index) {
						return (
							<div key={folderTab.name} className={styles.white}>
								<CrossNav name={folderTab.name} fav={folderTab.fav} setFold={setFold} />
							</div>
						)
					}
					return (
						<CrossNav
							key={folderTab.name}
							name={folderTab.name}
							fav={folderTab.fav}
							setFold={setFold}
						/>
					)
				})}
			</div>
			<button
				className={styles.addFolder}
				onClick={() => {
					setShown(!show)
				}}
			>
				<BsPlusLg />
			</button>
			<AddFolder show={show} setShown={setShown} />
		</div>
	)
}

export default FolderTouch
