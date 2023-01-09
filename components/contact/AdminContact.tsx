import React, { useState } from 'react'
import { IconBaseProps } from 'react-icons'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import styles from '../../styles/Admin/User.module.scss'
import ContactOption from './ContactOption'

const AdminContact = () => {
	const [fb, setFb] = useState('')
	const [ig, setIg] = useState('')
	const [tw, setTw] = useState('')
	const [gm, setGm] = useState('')

	return (
		<section className={styles.Module}>
			<h3>Contact</h3>
			<hr />
			<div>
				<ContactOption
					name='Facebook'
					value={fb}
					setValue={setFb}
					icon={() => <FaFacebookF />}
					shown={true}
					placeholder={'http://facebook.com/ponle-richard'}
				/>
				<ContactOption
					name='Instagram'
					value={ig}
					setValue={setIg}
					icon={() => <BsInstagram />}
					shown={false}
					placeholder={'http://instagram.com/ponle-richard'}
				/>
				<ContactOption
					name='Twitter'
					value={tw}
					setValue={setTw}
					icon={() => <BsTwitter />}
					shown={true}
					placeholder={'http://twitter.com/ponle-richard'}
				/>
				<ContactOption
					name='Gmail '
					value={gm}
					setValue={setGm}
					icon={() => <SiGmail />}
					shown={false}
					placeholder={'mailto://ponle-richard@gmail.com/'}
				/>
			</div>
		</section>
	)
}

export default AdminContact
