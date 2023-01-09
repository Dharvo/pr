import ReactDOM from 'react-dom'

const Modal = ({ show, children }) => {
	const elem = globalThis?.window?.document.getElementById('portal')
	return <>{show ? ReactDOM.createPortal(<div className='portal'>{children}</div>, elem) : ''}</>
}

export default Modal
