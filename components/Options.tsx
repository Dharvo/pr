import React from 'react'

import styles from '../styles/Admin/User.module.scss'
const Options = ({ name, icon }: { name: string; icon: Function }) => {
	return (
		<div className={styles.Option}>
			<p>{name}</p>
			<span>{icon()}</span>
		</div>
	)
}

export default Options
