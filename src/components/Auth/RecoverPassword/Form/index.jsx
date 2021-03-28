import React from 'react';
// import PropTypes from 'prop-types';

// import Button from '../../../Button';
import useInput from './../../ValidationHook/index';
import Email from '../../../Email';
import { recoverUser } from '../../../../store/actions';
import { useDispatch } from "react-redux";


//Recover Password

function Form()  {
	const email = useInput('', {isEmpty: true, minLength: 5, isEmail: true});
	const dispatch = useDispatch();

	
	const handleRecover = () => {
		
		console.log('Кнопка работает');
		const newUserData = {
			email: email.value,
		};	
		dispatch(recoverUser(newUserData));
		
	};

	return (
		
		<form 
			className="front__form"
			onSubmit={event => {
				event.preventDefault();
				event.target.reset();	
				
			}}
		>

			
			{/* Email  */}
			{(email.isDirty && email.isEmpty) && 
				<div className="validation-text">empty field</div>}
			{(email.isDirty && email.emailError) && 
				<div className="validation-text">enter valid email</div>}
			
			{(email.isDirty && email.isEmpty) || (email.isDirty && email.emailError) ?
			// true					 true				true
				<Email 
					value={email.value}
					onChange={e => email.onChange(e)}
					onBlur={e => email.onBlur(e)}
					style = {{border: '1px solid #EB5757'}}
				/> 
				: <Email 
					value={email.value}
					onChange={e => email.onChange(e)}
					onBlur={e => email.onBlur(e)}
				/>
					
			}
			
			{/* Кнопка */}
			<button
				type = "submit" 
				className = "button"
				disabled = {!email.inputValid}
				onClick = { handleRecover }
			>
						send me email instructions
			</button>
			{/* <Button 
				type = "submit" 
				text = "Sign up"
				disabled = {!email.inputValid}
			/> */}
			
		</form>
		
	);
	
}


export default Form;