import { toast } from 'react-toastify'

const useDecypher = (error) => {
	console.log('errorCode', error)
	const errorCode = error?.code
	if (errorCode === 'auth/invalid-email') toast.error('Wrong! Please use a valid email')
	//} else
	if (errorCode === 'auth/wrong-password') toast
	toast.error('Wrong! Try another password')
	//} else
	if (errorCode === 'auth/network-request-failed') toast.error('Oops, You are Offline')
	toast.error(errorCode)
}

export default useDecypher
