import React from 'react'
import Image from 'next/image'
import Ubuntu from '../public/Ubuntu.jpg'
import styles from '../styles/Loading.module.scss'

const UbuntuPage: React.FC = () => {
	return (
		<>
			<Image
				className={styles.Ubuntu}
				src={Ubuntu}
				alt='Ubuntu'
				width={400}
				height={400}
				placeholder='blur'
			/>
		</>
	)
}

export default UbuntuPage
