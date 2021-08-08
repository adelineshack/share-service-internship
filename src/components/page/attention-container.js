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
			onClick={() => props.Change()}
		>
			<div className="singOutAttention" onClick={(event) => event.stopPropagation()}>
				<div className="white-text">Sign out</div>
				<button 
					onClick = { () => {
						localStorage.token = undefined;
						navigate('/auth'); 
					}} 
					className="btn-yes all-buttons"
				>
					Yes
				</button>
				<button className="btn-cancel all-buttons" onClick={() => props.Change()}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default Modal;
