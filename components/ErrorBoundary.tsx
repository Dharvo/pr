import React, { ErrorInfo } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type mrProps = { children: React.ReactNode }

class ErrorBoundary extends React.Component<mrProps, { hasError: Boolean; errMsg: Object }> {
	constructor(props: mrProps) {
		super(props)
		// Define a state variable to track whether is an error/not
		this.state = { hasError: false, errMsg: {} }
	}

	static getDerivedStateFromError(error: Object) {
		// Update state so the next render will show the fallbackUI
		return { hasError: true, errMsg: error }
	}

	componentDidCatch(error: Object, errorInfo: ErrorInfo) {
		// You can use your own error logging service here
		console.log(error.toString)
		// console.log({ error, errorInfo })
	}

	render() {
		// Check if the error is thrown
		if (this.state.hasError) {
			const message: string = this.state.errMsg!.message
			toast.error(`Something is wrong: ${message}`)
			return (
				<>
					<ToastContainer />
					<h2>Oops, there is an error!</h2>
					{/* 
					<button type='button' onClick={() => this.setState({ hasError: false })}>
					Try again?
				</button> */}
					{/* {this.props.children} */}
				</>
			)
		}

		return <>{this.props.children}</>
	}
}

export default ErrorBoundary
