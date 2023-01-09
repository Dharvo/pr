import React from 'react'
import Footer from '../../components/Footer'
import Reviews from '../../components/Reviews'
import TopProjects from '../../components/TopProjects'

const About = () => {
	return (
		<div id='about'>
			<h1>ponle richard oluwagbenga</h1>
			<h4>Photogrpaher</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facilis, recusandae ea
				maxime vitae distinctio dolorem accusamus! Asperiores, cupiditate. Minus est nulla
				voluptatibus dolor ex tempora. Consectetur ullam eos autem officia, et tempore laboriosam!
				Eius dolores dolor aspernatur vitae? A placeat libero ipsam adipisci ducimus maiores quae?
				A, ab perspiciatis!
			</p>
			<button>Find out more</button>
			<TopProjects />
			<Reviews />
		</div>
	)
}

export default About
