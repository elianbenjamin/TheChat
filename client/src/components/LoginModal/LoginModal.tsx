"use client";
import Login from '../../views/Login/Login';
import {AiOutlineClose} from 'react-icons/ai';


export type LoginModalProps = {
	isOpen: boolean;
	closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps>  = ({isOpen, closeModal}) => {

	if(!isOpen) return null;  

	return (
		<div>
			<AiOutlineClose size={30} color="black" cursor={"pointer"}/>
			<div>
 			<Login/>
			 </div>
 		</div>
	);
};

export default LoginModal;
