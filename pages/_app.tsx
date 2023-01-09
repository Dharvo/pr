import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/global.scss'
import type { ReactElement, ReactNode } from 'react'
import Layout from '../components/layout'
// import { useRouter } from 'next/router'
// import Loading from '../components/Loading'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

	// const router = useRouter()
	// if (!router.isReady) return <Loading />
	return (
		<>
			<Head>
				<title>Ponle Richard</title>
				<link rel='shortcut icon' href='logo.svg' type='image/x-icon' />
				<meta
					name='description'
					content='Ponle Richard is a mobile studio prestigious photographer and photo editor finding the best camera to recreate the tempest in lagos nigeria paparazzo'
				/>
				<meta
					name='keywords'
					content='camera, gallery, photography, photographer,mobile, studio,photo, editor'
				/>
				<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			{getLayout(<Component {...pageProps} />)}
			<div id='portal'></div>
		</>
	)
}

//****************************************************** */

// if (Component.getLayout) {
// 	return Component.getLayout(<Component {...pageProps} />)
// }

/* <Header />
			<Component {...pageProps} />
			<Footer /> */

// import { ReactNode } from 'react'
// import {NextPage } from 'next'
// const getLayout = Component.getLayout || ((page:ReactNode)=>page)

// if (Component.getLayout){
// 	return Component.getLayout(<Component {...pageProps} />)
// }

// type Page<P = {}> =NextPage<P> & {getLayout?:(page:ReactNode)=>ReactNode}
// type Props = AppProps & {Compnent:Page}
// const App =( { Component, pageProps }:Props)=>{
// 	const getLayout = Component.getLayout ??((page:ReactNode)=>page)
// 	return getLayout(<Component {...pageProps} />)
// }
// export default App
