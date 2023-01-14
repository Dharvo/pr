import Input from 'components/Input'
import Modal from 'components/Modal'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import styles from '../../styles/Admin/User.module.scss'

type Props = {
	show: boolean
	set: Function
}
const AddReview = ({ show, set }: Props) => {
	const [name, setName] = useState('')
	return (
		<Modal show={show}>
			<div className={styles.add__portfolio__image}>
				<button className='close' onClick={() => set(!show)}>
					<CgClose />
				</button>
				<form>
					<input type='text' />
					<input type='file' id={`${name}-ID`} />
					<input type='submit' value='Submit' />
				</form>
			</div>
		</Modal>
	)
}

export default AddReview
