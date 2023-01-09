import React, { useState, useEffect } from 'react'
import { GiBrokenHeart } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import styles from '../../styles/Admin/User.module.scss'
import { BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs'
type Props = { name: string; fav: boolean; setFold: Function }
const CrossNav = (props: Props) => {
	useEffect(() => {
		// cheeck if its parent is some one #User_portfolioNav__AaPds
		// not it paint white
	}, [])
	const [parentcheck, setParentCheck] = useState(true)
	// const CrossNav = ({name}:string) => {
	return (
		<div
			className={styles.crossNav}
			// className={`${styles.crossNav} ${parentcheck ? 'whiten' : ''}`}
			onClick={() => props.setFold(props.name)}
		>
			<span>{props.name}</span>
			<button>{props.fav ? <BsFillSuitHeartFill /> : <BsSuitHeart />}</button>
			<button>
				<CgClose />
			</button>
		</div>
	)
}

export default CrossNav
