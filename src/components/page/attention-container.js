import React from 'react';
import './page.scss';

const Modal = (props) => {
	return (
		<div
			className={`attentionContainer ${
				props.showModal ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className="singOutAttention">
				<div className="white-text">Sing out</div>
				<button className="btn-yes">Yes</button>
				<button className="btn-cancel" onClick={() => props.Change()}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default Modal;
