import React from 'react';
// import PropTypes from 'prop-types';
// import { navigate } from '@reach/router';
import useInput from './../../ValidationHook/index';
// import Button from './../../../Button/index';
import Password from './../../../Password/index';
import { useDispatch } from "react-redux";
import { newPasswordUser } from '../../../../store/actions';
import { useParams } from '@reach/router';



//Change Password

function Form()  {
	
	const newPassword = useInput('', {isEmpty: true, minLength: 5});
	const confirmNewPassword = useInput('', {isEmpty: true, minLength: 5});
	
	
	
	
	const tokenProps = useParams();
	const token = tokenProps.token;
	console.log(token);
	


	const dispatch = useDispatch();

	
	const handleNewPassword = () => {
		
		console.log('Кнопка работает');
		
		const newUserData = {
		// from your form
			token: token,
			password: newPassword.value,
			
		};
		dispatch(newPasswordUser(newUserData));
		
	};
	// console.log(newPassword.value);

	return (
		
		<form className="back__form"
			onSubmit={event => {
				event.preventDefault();
				event.target.reset();
			}}>
			<div className="back__wrapper">
				<label className="back__item">
								
					<span htmlFor="password-form">New password</span>

					{(newPassword.isDirty && newPassword.isEmpty) && 
					<div className="validation-text-change">empty field</div>}

					{(newPassword.isDirty && newPassword.minLengthError) && 
					<div className="validation-text-change">too short password</div>}

			
					{(newPassword.isDirty && newPassword.isEmpty) || 
					(newPassword.isDirty && newPassword.minLengthError) ?
						<Password 
							value={ newPassword.value }
							onChange={e => newPassword.onChange(e)}
							onBlur={e => newPassword.onBlur(e)}
							style = {{border: '1px solid #EB5757'}}
						/> 
						: <Password
							value = { newPassword.value }
							onChange = {e => newPassword.onChange(e)}
							onBlur = {e => newPassword.onBlur(e)}
						/>
					}

				</label>


				<label className="back__item">

					<span className="title-pass">Confirm new password</span>

					{(confirmNewPassword.isDirty && confirmNewPassword.isEmpty) && 
					<div className="validation-text">empty field</div>}

					{(confirmNewPassword.isDirty && confirmNewPassword.minLengthError) && 
					<div className="validation-text">too short password</div>}

			
					{(confirmNewPassword.isDirty && confirmNewPassword.isEmpty) || 
					(confirmNewPassword.isDirty && confirmNewPassword.minLengthError) ?
						<Password 
							value={ confirmNewPassword.value }
							onChange={e => confirmNewPassword.onChange(e)}
							onBlur={e => confirmNewPassword.onBlur(e)}
							style = {{border: '1px solid #EB5757'}}
						/> 
						: <Password
							value = { confirmNewPassword.value }
							onChange = {e => confirmNewPassword.onChange(e)}
							onBlur = {e => confirmNewPassword.onBlur(e)}
						/>
					}

						
				</label>
				<div className="back__item">
					{(newPassword.value != confirmNewPassword.value) && 
						<div
							style={{color: '#EB5757'}}
						>
							Пароли не совпадают
						</div>}
			
					<button
						type = "submit" 
						className = "button"
						// disabled = {!newPassword.inputValid || 
						// 			!confirmNewPassword.inputValid ||
						// 			oldPassword.inputValid} 
						onClick = { handleNewPassword }
					>
						Change my password
					</button>
				</div>

			</div>
			
			
					
		</form>
		
	);
	
}


export default Form;