import ErrorBoundary from 'components/ErrorBoundary'
import React from 'react'
import styles from '../../styles/Admin/User.module.scss'
import PortfolioWrapper from './PortfolioWrapper'

const Portfolio: React.FC = () => {
	return (
		<section className={styles.Module}>
			<h3>Portfolio</h3>
			<hr />
			<ErrorBoundary>
				<PortfolioWrapper />
			</ErrorBoundary>
		</section>
	)
}

export default Portfolio
