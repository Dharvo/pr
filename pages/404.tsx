import React from 'react'
import Footer from '../components/Footer'
import Ubuntu from '../public/Ubuntu.jpg'
import Link from 'next/link'
import Image from 'next/image'

function page404() {
	return (
		<div>
			<div className='logo'>pr</div>
			<h1>
				<span>404</span>
				error
			</h1>
			<h4>Sorry, we couldnt find the page you are looking for</h4>
			<h3>Explore more Art instead</h3>
			<Link href={'./'} passHref>
				<button>go home</button>
			</Link>
			<Image
				// className={styles.Ubuntu}
				src={Ubuntu}
				alt='Ubuntu'
				width={500}
				height={500}
				placeholder='blur'
			/>
		</div>
	)
}

page404.getLayout = function PageLayout(page: React.FC) {
	return (
		<>
			{page}
			<Footer />
		</>
	)
}

export default page404
