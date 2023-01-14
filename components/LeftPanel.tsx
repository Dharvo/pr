import React from 'react'
import { TiAdjustBrightness } from 'react-icons/ti'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
function LeftPanel() {
	return (
		<>
			<div>
				<TiAdjustBrightness size={30} />
			</div>
			<div>
				<FaFacebookF size={30} />
			</div>
			<div>
				<FaTwitter size={30} />
			</div>
			<div>
				<FaInstagram size={30} />
			</div>
		</>
	)
}

export default LeftPanel
