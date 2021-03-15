import React from 'react';
// import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

import Button from '../../../Button';
import useInput from './../../ValidationHook/index';
import Email from '../../../Email';



//Recover Password

function Form()  {
	const email = useInput('', {isEmpty: true, minLength: 5, isEmail: true});
	

	return (
		
		<form 
			className="front__form"
			onSubmit={event => {
				event.preventDefault();
				event.target.reset();

				navigate('/reply-recover');
			}}
		>

			
			{/* Email  */}
			{(email.isDirty && email.emailError || email.minLengthError) && 
			<div 
				style={{color: '#EB5757', 
					position: 'relative', top: '0', 
					textAlign: 'right', fontSize: '14px', 
					marginBottom: '3px'}}
			>
					enter valid email
			</div>}


			{(email.isDirty && email.isEmpty || email.minLengthError) ?
				<Email 
					value={email.value}
					onChange={e => email.onChange(e)}
					onBlur={e => email.onBlur(e)}
					placeholder="Email"
					style = {{border: '1px solid #EB5757'}}/> 
				: <Email 
					value={email.value}
					onChange={e => email.onChange(e)}
					onBlur={e => email.onBlur(e)}
					placeholder="Email"/>
				
			}
			
			{/* Кнопка */}
			<Button 
				type = "submit" 
				text = "Sign up"
				disabled = {!email.inputValid}
			/>
			
		</form>
		
	);
	
}


export default Form;