import React from 'react'
import Footer from './Footer'
import LeftPanel from './LeftPanel'
import Nav from './Nav'

type Props = {
	children: React.ReactNode
}
// let children:React.FC;
// const Layout:React.FC ({children}:{React.Component})=> {
// const Layout: React.FC<Props> = ({ children }) => {
// const Layout: ReactElement = () => {
function Layout(props: Props) {
	const navs: string[] = ['home', 'about', 'portfolio', 'contact']
	return (
		<>
			<div className='navbar'>
				<div className='logo'>pr</div>
				{navs.map((nav) => (
					<Nav key={nav} name={nav} />
				))}
			</div>
			<LeftPanel />
			{props.children}
			<Footer />
		</>
	)
}

export default Layout
