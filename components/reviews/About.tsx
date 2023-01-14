import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { CgEditHighlight, CgEditMarkup } from 'react-icons/cg'
import { RiEditCircleFill } from 'react-icons/ri'
import styles from '../../styles/Admin/User.module.scss'
import AboutWrapper from './AboutWrapper'

const AdminAbout = () => {
	return (
		<section className={styles.Module}>
			<div className={styles.AdminAbout}>
				<header>
					<h3>About</h3>
					<span>
						<CgEditMarkup />
					</span>
				</header>
				<hr />
				<AboutWrapper />
			</div>
		</section>
	)
}

export default AdminAbout
