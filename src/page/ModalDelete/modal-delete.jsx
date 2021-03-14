import React from 'react';
import './ModalDelete.scss';

function ModalDeleteAccount(props) {
	return (
		<div
			className={`attention-container-delete ${
				props.deleteModal ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className="deleteAccount singOutAttention">
				<div className="white-text">Delete your account?</div>
				<button className="btn-yes">Yes</button>
				<button className="btn-cancel" onClick={() => props.Delete()}>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default ModalDeleteAccount;
