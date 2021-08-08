import React from 'react';
import './SuccessModal.scss';

function SuccessModal(props) {
	return (
		<div
			className={`attention-container-success ${
				props.successModal ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className=" successAttention">
				<div className="white-text ">Success!</div>
				<div className="menu-text success">
					Dude, don’t forget your {'\n'} new password :)
				</div>
				<button className="btn-change" onClick={() => props.Success()}>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default SuccessModal;
