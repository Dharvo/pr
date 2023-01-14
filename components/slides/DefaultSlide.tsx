import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import styles from '../../styles/Admin/User.module.scss'
type stateProps = {
	show: Boolean
	setShown: Function
}
const DefaultSlide = ({ show, setShown }: stateProps) => {
	return (
		<div className={styles.default} onClick={() => setShown(!show)}>
			<BsPlusLg />
		</div>
	)
}

export default DefaultSlide
