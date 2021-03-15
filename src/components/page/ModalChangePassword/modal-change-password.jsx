import React from 'react';
import './ModalChangePassword.scss';

function ModalChangePassword(props) {
	const twoFunc = () => {
		props.ChangePassword();
		props.Success();
	};
	return (
		<div
			className={`attention-container-changePassword ${
				props.changeModal ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className="changePassword">
				<div onClick={() => props.ChangePassword()}>
					<img src="/images/x.png" alt="x" className="x" />
				</div>
				<div className="white-text">Change password</div>
				<input
					placeholder="Старый пароль"
					alt="Старый пароль"
					className="input"
				/>
				<input
					placeholder="Новый пароль"
					alt="Новый пароль"
					className="input"
				/>
				<input
					placeholder="Еще раз новый пароль"
					alt="Еще раз новый пароль"
					className="input"
				/>
				<button className="btn-change" onClick={() => twoFunc()}>
					Change my password
				</button>
			</div>
		</div>
	);
}

export default ModalChangePassword;
