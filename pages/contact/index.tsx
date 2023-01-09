import React from 'react'
import { SiMinutemailer } from 'react-icons/si'
import { FaVoicemail } from 'react-icons/fa'
const Contact: React.FC = () => {
	return (
		<div>
			<div className='contact__form'>
				<form>
					<button>
						Email
						<SiMinutemailer />
					</button>
				</form>
			</div>

			<div className='contacts__wrapper'>
				<div className='contact__method'>
					<FaVoicemail />
				</div>
				<div className='contact__method'></div>
				<div className='contact__method'></div>
			</div>
		</div>
	)
}

export default Contact
