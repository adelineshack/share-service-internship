import React from 'react';
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
					/>

					{(newPassword.isDirty && newPassword.isEmpty) && 
					<div className="validation-text-change">empty field</div>}

					{(newPassword.isDirty && newPassword.minLengthError) && 
					<div className="validation-text-change">too short password</div>}
					<input
						placeholder="Новый пароль"
						value={ newPassword.value }
						onChange={e => newPassword.onChange(e)}
						onBlur={e => newPassword.onBlur(e)}
						alt="Новый пароль"
						className="input"
						name="new_password"
						type="password"
					/>

					{(confirmNewPassword.isDirty && confirmNewPassword.isEmpty) && 
					<div className="validation-text">empty field</div>}

					{(confirmNewPassword.isDirty && confirmNewPassword.minLengthError) && 
					<div className="validation-text">too short password</div>}

					<input
						placeholder="Еще раз новый пароль"
						value={ confirmNewPassword.value }
						onChange={e => confirmNewPassword.onChange(e)}
						onBlur={e => confirmNewPassword.onBlur(e)}
						alt="Еще раз новый пароль"
						className="input"
						name="new_password_again"
						type="password"
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
