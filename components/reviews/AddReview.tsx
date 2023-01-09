import Input from 'components/Input'
import Modal from 'components/Modal'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import styles from '../../styles/Admin/User.module.scss'

type Props = {
	show: boolean
	set: Function
}
const AddReview = (
	// props: boolean

	{ show, set }: Props
) => {
	const [name, setName] = useState('')
	return (
		<Modal show={show}>
			<div className={styles.add__portfolio__image}>
				<button className='close' onClick={() => set(!show)}>
					<CgClose />
				</button>
				{/* <form onSubmit={createPortImage}> */}
				<form>
					<input type='text' />
					{/* <Input
						label='Image Name'
						placeholder='Set a Name'
						value={name}
						setValue={setName}
						focus={focusName}
						setFocus={setFocusName}
						icon={<BiRename />}
						pass={false}
					/> */}
					<input type='file' id={`${name}-ID`} />
					<input type='submit' value='Submit' />
				</form>
				{/* {imgUrl && <div>{imgUrl}</div>} */}
			</div>
		</Modal>
	)
}

export default AddReview
