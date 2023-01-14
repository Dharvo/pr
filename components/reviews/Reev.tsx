import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Admin/User.module.scss'
type Data = {
	name: string
	comment: string
	imgUrl: string
}
const Reev = ({ name, comment, imgUrl }: Data) => {
	return (
		<div className={styles.reev}>
			<div className={styles.reev__Image}>
				<Image src={imgUrl} alt={name} />
			</div>
			<p>
				<b>{name} </b> says <i> "{comment}"</i>
			</p>
			<button>Edit</button>
		</div>
	)
}

export default Reev
