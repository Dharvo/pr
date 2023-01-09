import React, { useState } from 'react'
import styles from '../../styles/Admin/User.module.scss'
import { IconType } from 'react-icons'

type Option = {
	name: string
	value: string
	setValue: Function
	icon: Function
	shown: boolean
	placeholder: string
}
const ContactOption = ({ name, value, setValue, icon, shown, placeholder }: Option) => {
	const [opted, setOpted] = useState(false)
	const activateOpt = () => {
		setOpted((opt) => !opt)
	}

	return (
		<div className={styles.contact__option}>
			<h3>{name}</h3>
			<div>
				<input
					type='text'
					name={name}
					value={value}
					placeholder={placeholder}
					// onClick={() => setFocus(true)}
					// onBlur={() => setFocus(false)}
					onChange={(e) => setValue(e.target.value)}
				/>
				<div className={styles.actions}>
					<span className={`${styles.icon} ${opted ? styles.opted : ''}`}>{icon()}</span>
					<label className={styles.switch}>
						<input type='checkbox' onClick={activateOpt} />
						{/* onClick='changeVal()' */}
						<span className={`${styles.slider} ${styles.round}`} />
					</label>
				</div>
			</div>
		</div>
	)
}

export default ContactOption
