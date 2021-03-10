import React from 'react';
// import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import useInput from './../../ValidationHook/index';
import Button from './../../../Button/index';
import Password from './../../../Password/index';




//Change Password

function Form()  {
	
	const newPassword = useInput('', {isEmpty: true, minLength: 5});
	const confirmNewPassword = useInput('', {isEmpty: true, minLength: 5});
	const oldPassword = useInput('', {isEmpty: true, minLength: 5});

	return (
		
		<form className="back__form"
			onSubmit={event => {
				event.preventDefault();
				// const id = event.target.elements[0].value;
				event.target.reset();
				navigate('/changed-password');
			}}>
			<div className="back__wrapper">
				<label className="back__item">
								
					<span htmlFor="password-form">New password</span>
					{(newPassword.isDirty && newPassword.isEmpty || newPassword.minLengthError) && 
								<div 
									style={{color: '#EB5757', 
										position: 'absolute', top: '0px',
										right: '0px',
										fontSize: '12px', 
										marginBottom: '3px'}}
								>
										enter valid password
								</div>}
					{(newPassword.isDirty && newPassword.isEmpty || newPassword.minLengthError) ?
						<Password 
							value={newPassword.value}
							onChange={e => newPassword.onChange(e)}
							onBlur={e => newPassword.onBlur(e)}
							style = {{border: '1px solid #EB5757'}} /> :
						<Password 
							value={newPassword.value}
							onChange={e => newPassword.onChange(e)}
							onBlur={e => newPassword.onBlur(e)}	
						/> }
								
								
								
					{/* <input required className="back__input" name="password" type="password"/> */}
				</label>


				<label className="back__item">

					<span className="title-pass">Confirm new password</span>

					{(confirmNewPassword.isDirty && confirmNewPassword.isEmpty || confirmNewPassword.minLengthError) && 
								<div 
									style={{color: '#EB5757', 
										position: 'absolute', top: '0px',
										right: '0px',
										fontSize: '12px', 
										marginBottom: '3px'}}
								>
										enter valid password
								</div>}
					{(confirmNewPassword.isDirty && confirmNewPassword.isEmpty || confirmNewPassword.minLengthError) ?
						<Password 
							style = {{border: '1px solid #EB5757'}}
							value={confirmNewPassword.value}
							onChange={e => confirmNewPassword.onChange(e)}
							onBlur={e => confirmNewPassword.onBlur(e)} 
						/> :
						<Password
							value={confirmNewPassword.value}
							onChange={e => confirmNewPassword.onChange(e)}
							onBlur={e => confirmNewPassword.onBlur(e)}
						/> }
								
								
				</label>


				<label className="back__item">
								
					<span className="title-pass">Old password</span>

					{(oldPassword.isDirty && oldPassword.isEmpty || oldPassword.minLengthError) && 
								<div 
									style={{color: '#EB5757', 
										position: 'absolute', top: '0px',
										right: '0px',
										fontSize: '12px', 
										marginBottom: '3px'}}
								>
										enter valid password
								</div>}
					{(oldPassword.isDirty && oldPassword.isEmpty || oldPassword.minLengthError) ?
						<Password 
							style = {{border: '1px solid #EB5757'}}
							value={oldPassword.value}
							onChange={e => oldPassword.onChange(e)}
							onBlur={e => oldPassword.onBlur(e)} /> :
						<Password 
							value={oldPassword.value}
							onChange={e => oldPassword.onChange(e)}
							onBlur={e => oldPassword.onBlur(e)}
						/> }
								
				</label>
			</div>
			{(newPassword.value != confirmNewPassword.value) && 
						<div
							style={{color: '#EB5757'}}
						>
							Пароли не совпадают
						</div>}
			<Button 
				type="submit" 
				text="Change my password"
				disabled = {!newPassword.inputValid || 
							!confirmNewPassword.inputValid ||
							oldPassword.inputValid} />
					
		</form>
		
	);
	
}


export default Form;