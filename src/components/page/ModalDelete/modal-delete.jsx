import React from 'react';
import './ModalDelete.scss';
import '../button.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAccount } from '../actions/actions';
// import { navigate } from '@reach/router';




function ModalDeleteAccount(props) {

	const dispatch = useDispatch();
	const id = useSelector((state) => state.userInfo.userData.id);
	
	const handlerDeleteAccount = () => {
		dispatch(deleteAccount(id));
		
	};
	
	return (
		<div
			className={`attention-container-delete ${
				props.deleteModal ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className="deleteAccount singOutAttention">
				<div className="white-text">Delete your account?</div>
				<button 
					className="btn-yes all-buttons"
					onClick = { handlerDeleteAccount }
				>
					Yes
				</button>

				<button
					className="btn-cancel all-buttons"
					onClick={() => props.Delete()}
				>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default ModalDeleteAccount;
