import React, { useEffect, useState } from 'react'
import styles from '../../styles/Admin/User.module.scss'
import CrossNav from './CrossNav'
import Image from 'next/image'
import Port from './Port'
import useSWR from 'swr'
import { doc, getDocs } from 'firebase/firestore'
import { firestore } from '../../firebase/firebaseConfig'
import AddPort from './AddPort'
import { BsPlusLg } from 'react-icons/bs'
import FolderTouch from './FolderTouch'
type Folder = { name: string; fav: boolean; data: string[] }
type FolderArr = { name: string; fav: boolean; data: string[] }[]

const Portfolio: React.FC = () => {
	const [show, setShown] = useState<boolean>(false)
	const [fold, setFold] = useState<string>('')
	const folders: FolderArr = [
		{ name: 'Fine Dining', fav: true, data: [''] },
		{ name: 'Urban', fav: true, data: ['', ''] },
		{ name: 'Port', fav: true, data: ['', '', ''] },
		{ name: 'Vibexpensive', fav: false, data: ['', '', '', ''] },
		{ name: 'Portfolio', fav: false, data: ['', '', '', '', ''] },
	]

	const fetcher = async () => {
		// const Portfolios = doc(firestore, `Portfolio/`)
		// getDocs(Portfolios).then((snapshot)=>{console.time(snapshot)})
		// const slidesCollection = collection(firestore, 'Slides')
		// const result = []
		// getDocs(slidesCollection).then((snapshot) => {
		// 	snapshot.docs.forEach((snapshot) => {
		// 		result.push({ ...snapshot.data(), id: snapshot.id })
		// 	})
		// })
		// return result
		return ['', '', '']
	}

	const { data, error } = useSWR('portfolio', fetcher)

	useEffect(() => {
		setFold(folders[0].name)
	}, [])
	return (
		<section className={styles.Module}>
			<h3>Portfolio</h3>
			<hr />
			{/* DEFAULT ACTIVE NAV THEN ONCLICK WILL FILTER TO ANOTHER SET */}
			<FolderTouch folders={folders} setFold={setFold} fold={fold} />
			<div className={styles.folder__photos}>
				{folders.map(
					(folder: Folder) =>
						folder.name === fold && <Port key={folder.name} data={folder.data} name={folder.name} />
				)}
			</div>
			{/* <AddPort /> */}
		</section>
	)
}

export default Portfolio
