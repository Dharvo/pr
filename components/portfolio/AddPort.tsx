import Input from 'components/Input'
import Modal from 'components/Modal'
import React, { useState } from 'react'
import { BiRename } from 'react-icons/bi'
import { CgClose, CgCloseO } from 'react-icons/cg'
import styles from '../../styles/Admin/User.module.scss'
type Props = {
	portName: string
	show: boolean
	setShown: Function
}

const AddPort = ({ portName, show, setShown }: Props) => {
	const createPortImage = () => {}
	const [name, setName] = useState<string>('')
	const [focusName, setFocusName] = useState<boolean>(false)
	return (
		<Modal show={show}>
			<div className={styles.add__portfolio__image}>
				<button className='close' onClick={() => setShown(!show)}>
					<CgClose />
				</button>
				<h2>
					You are Adding {name} to {portName}
				</h2>
				<form onSubmit={createPortImage}>
					<Input
						label='Image Name'
						placeholder='Set a Name'
						value={name}
						setValue={setName}
						focus={focusName}
						setFocus={setFocusName}
						icon={<BiRename />}
						pass={false}
					/>
					<input type='file' name={name} id={`${name}-ID`} />
					<input type='submit' value='Submit' />
				</form>
				{/* {imgUrl && <div>{imgUrl}</div>} */}
			</div>
		</Modal>
	)
}

export default AddPort
