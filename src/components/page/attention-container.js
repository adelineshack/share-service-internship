import React from 'react';
import './page.scss';
import './button.scss';
import { navigate } from '@reach/router';

const Modal = (props) => {
	return (
		<div
			className={`attentionContainer ${
				props.showModal ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className="singOutAttention">
				<div className="white-text">Sing out</div>
				<button onClick = { () => navigate('/auth') } className="btn-yes all-buttons">Yes</button>
				<button className="btn-cancel all-buttons" onClick={() => props.Change()}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default Modal;
