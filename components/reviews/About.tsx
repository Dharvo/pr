import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { CgEditHighlight, CgEditMarkup } from 'react-icons/cg'
import { RiEditCircleFill } from 'react-icons/ri'
import styles from '../../styles/Admin/User.module.scss'

const AdminAbout = () => {
	return (
		<section className={styles.Module}>
			<div className={styles.AdminAbout}>
				<header>
					{/* <div className='hero'> */}
					<h3>About</h3>
					<span>
						<CgEditMarkup />
						{/* <RiEditCircleFill /> */}
					</span>
				</header>
				{/* </div> */}
				<hr />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure recusandae nesciunt esse
					corrupti dolor dolores numquam! Sapiente quia eius, obcaecati nulla aspernatur, quo rerum
					dolores veritatis distinctio soluta repellendus debitis assumenda voluptas alias nihil
					molestias et perspiciatis facilis error temporibus nemo neque. Natus nulla officia animi
					ad dolores veritatis distinctio soluta repellendus debitis assumenda voluptas alias nihil
					molestias et perspiciatis facilis error temporibus nemo neque. Natus nulla officia animi
					ad atque quia, inventore aliquid, fugit corrupti odio laborum? Hic quia impedit
					consequatur illum expedita veniam, velit vitae, nesciunt ad officia deleniti doloribus.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit, porro aut
					aliquid atque, perferendis recusandae vitae voluptatem unde voluptate dicta cum debitis a!
					Minima nulla consequuntur velit ex asperiores.
				</p>
			</div>
		</section>
	)
}

export default AdminAbout
