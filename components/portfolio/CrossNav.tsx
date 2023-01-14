import React from 'react'
import { CgClose } from 'react-icons/cg'
import styles from '../../styles/Admin/User.module.scss'
import { BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs'
type Props = { name: string; fav: boolean; setFold: Function }
const CrossNav = (props: Props) => {
	return (
		<div className={styles.crossNav} onClick={() => props.setFold(props.name)}>
			<span>{props.name}</span>
			<button>{props.fav ? <BsFillSuitHeartFill /> : <BsSuitHeart />}</button>
			<button>
				<CgClose />
			</button>
		</div>
	)
}

export default CrossNav
