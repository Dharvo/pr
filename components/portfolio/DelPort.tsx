import Modal from 'components/Modal'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import styles from '../../styles/Admin/User.module.scss'

type Props = { name: string; show: boolean; setShown: Function }

const DelPort = ({ name, show, setShown }: Props) => {
	return (
		<Modal show={show}>
			<div className={styles.add__slide__form}>
				<button onClick={() => setShown(!show)}>
					<CgClose />
				</button>
				<h2>Are you sure you want to delete this Image from {name}</h2>

				{/* <input type='button' value='Yes' onClick={() => verifyDelete(docId)} /> */}
				<input
					type='button'
					value='No'
					onClick={() => {
						setShown(!show)
					}}
				/>
			</div>
		</Modal>
	)
}

export default DelPort
