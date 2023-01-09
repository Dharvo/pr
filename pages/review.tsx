import React from 'react'
import Footer from '../components/Footer'

function Review() {
	return (
		<div>
			<h1>review</h1>
		</div>
	)
}

Review.getLayout = function PageLayout(page: unknown) {
	return (
		<>
			{page}
			<Footer />
		</>
	)
}

export default Review
