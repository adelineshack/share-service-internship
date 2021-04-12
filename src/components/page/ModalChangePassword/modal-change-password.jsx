import React, { useState } from 'react';
import './ModalChangePassword.scss';
// import { changePassword } from '../actions/actions';
// import { useDispatch } from 'react-redux';
import '../button.scss';
import useInput from './../../Auth/ValidationHook/index';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from './../actions/actions';

function ModalChangePassword(props) {

	const oldPassword = useInput('', {isEmpty: true, minLength: 5});
	const newPassword = useInput('', {isEmpty: true, minLength: 5});
	const confirmNewPassword = useInput('', {isEmpty: true, minLength: 5});

	const dispatch = useDispatch();
	const id = useSelector((state) => state.userInfo.userData.id);

	const setNewPassword = () => {
		
		const newUserData = {
		

			old_password: oldPassword.value,
			new_password: newPassword.value,
			
		};
		dispatch(changePassword(newUserData, id));
		
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
					onSubmit={event => {
						event.preventDefault();
						event.target.reset();
					}}
					className="change-form"
				>
					{(oldPassword.isDirty && oldPassword.isEmpty) && 
					<div className="validation-text-change">empty field</div>}

					{(oldPassword.isDirty && oldPassword.minLengthError) && 
					<div className="validation-text-change">too short password</div>}

					<input
						placeholder="Старый пароль"
						value={ oldPassword.value }
						onChange={e => oldPassword.onChange(e)}
						onBlur={e => oldPassword.onBlur(e)}
						alt="Старый пароль"
						className="input"
						name="old_password"
						type="password"
						id="old_password"
					/>

					{(newPassword.isDirty && newPassword.isEmpty) && 
					<div className="validation-text-change">empty field</div>}

					{(newPassword.isDirty && newPassword.minLengthError) && 
					<div className="validation-text-change">too short password</div>}
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
						value={ newPassword.value }
						onChange={e => newPassword.onChange(e)}
						onBlur={e => newPassword.onBlur(e)}
						alt="Новый пароль"
						className="input"
						name="new_password"
						type="password"
						id="new_password"
					/>

					{(confirmNewPassword.isDirty && confirmNewPassword.isEmpty) && 
					<div className="validation-text">empty field</div>}

					{(confirmNewPassword.isDirty && confirmNewPassword.minLengthError) && 
					<div className="validation-text">too short password</div>}

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
						value={ confirmNewPassword.value }
						onChange={e => confirmNewPassword.onChange(e)}
						onBlur={e => confirmNewPassword.onBlur(e)}
						alt="Еще раз новый пароль"
						className="input"
						name="new_password_again"
						type="password"
						id="new_password_again"
					/>

					{(newPassword.value != confirmNewPassword.value) && 
						<div
							style={{color: '#EB5757'}}
						>
							Пароли не совпадают
						</div>}
					<button 
						type="submit" 
						className="btn-change all-buttons"
						onClick = { setNewPassword }
					>
						Change my password
					</button>
				</form>


			</div>
		</div>
	);
}

export default ModalChangePassword;
