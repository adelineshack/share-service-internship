import React, { useState } from 'react';
import './ModalChangePassword.scss';
import { changePassword } from '../actions/actions';
import { useDispatch } from 'react-redux';
import '../button.scss';

function ModalChangePassword(props) {
	const dispatch = useDispatch();
	const twoFunc = (event) => {
		event.preventDefault();
		if (
			event.target.elements.new_password.value ===
			event.target.elements.new_password_again.value
		) {
			const newUserData = {
				old_password: event.target.elements.old_password.value,
				new_password: event.target.elements.new_password.value,
			};
			console.log(newUserData);
			dispatch(changePassword(newUserData));
			props.Success();
		}
	};

	const [showPassword, setShowPassword] = useState(true);

	const ShowPassword = (event) => {
		event.preventDefault();
		if (document.getElementById('old_password').type == 'password') {
			document
				.getElementById('old_password')
				.setAttribute('type', 'text');
		} else {
			document
				.getElementById('old_password')
				.setAttribute('type', 'password');
		}
		return setShowPassword(!showPassword);
	};

	const [showPassword2, setShowPassword2] = useState(true);

	const ShowPassword2 = (event) => {
		event.preventDefault();
		if (
			(document.getElementById('new_password').type == 'password') &
			(document.getElementById('new_password_again').type == 'password')
		) {
			document
				.getElementById('new_password')
				.setAttribute('type', 'text');
			document
				.getElementById('new_password_again')
				.setAttribute('type', 'text');
		} else {
			document
				.getElementById('new_password')
				.setAttribute('type', 'password');
			document
				.getElementById('new_password_again')
				.setAttribute('type', 'password');
		}
		return setShowPassword2(!showPassword2);
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
				<div className="white-text-1">Change password</div>
				<form
					onSubmit={(event) => twoFunc(event)}
					className="change-form"
				>
					{/* старый пароль */}
					<input
						placeholder="Старый пароль"
						alt="Старый пароль"
						className="input"
						name="old_password"
						type="password"
						id="old_password"
					/>
					<img
						src="/images/openedEye.png"
						className={`openedEye ${
							showPassword ? 'open' : 'close'
						} style={{...props.style}}`}
						onClick={(event) => {
							return ShowPassword(event);
						}}
					></img>
					<img
						src="/images/closedEye.png"
						className={`openedEye ${
							showPassword ? 'close' : 'open'
						} style={{...props.style}}`}
						onClick={(event) => ShowPassword(event)}
					></img>
					{/* новый пароль */}
					<input
						placeholder="Новый пароль"
						alt="Новый пароль"
						className="input"
						name="new_password"
						type="password"
						id="new_password"
					/>
					<img
						src="/images/openedEye.png"
						className={`openedEye2 ${
							showPassword2 ? 'open' : 'close'
						} style={{...props.style}}`}
						onClick={(event) => {
							return ShowPassword2(event);
						}}
					></img>
					<img
						src="/images/closedEye.png"
						className={`openedEye2 ${
							showPassword2 ? 'close' : 'open'
						} style={{...props.style}}`}
						onClick={(event) => ShowPassword2(event)}
					></img>
					{/* еще раз новый пароль */}
					<input
						placeholder="Еще раз новый пароль"
						alt="Еще раз новый пароль"
						className="input"
						name="new_password_again"
						type="password"
						id="new_password_again"
					/>
					<button type="submit" className="btn-change all-buttons">
						Change my password
					</button>
				</form>
			</div>
		</div>
	);
}

export default ModalChangePassword;
