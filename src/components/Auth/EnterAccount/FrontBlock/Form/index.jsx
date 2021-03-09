import React from 'react';
// import PropTypes from 'prop-types';
import { navigate, Link } from '@reach/router';
import useInput from './../../../ValidationHook/index';
import Button from '../../../../Button';
import Email from './../../../../Email/index';
import Password from './../../../../Password/index';


//CreateAccount

function Form()  {
	const email = useInput('', {isEmpty: true, minLength: 5, isEmail: true});
	const password = useInput('', {isEmpty: true, minLength: 5});

	return (
		
		<form 
			className="front__form"
			onSubmit={event => {
				event.preventDefault();
				event.target.reset();

				navigate('/success-auth');
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
					style = {{border: '1px solid #EB5757'}}
				/> 
				: <Email
					value={email.value}
					onChange={e => email.onChange(e)}
					onBlur={e => email.onBlur(e)}/>
				
			}
			{/* Password */}
			{(password.isDirty && password.isEmpty || password.minLengthError) && <div 
				style={{color: '#EB5757', 
					position: 'relative', textAlign: 'right', 
					fontSize: '14px', marginBottom: '3px'}}>
					enter valid password
			</div>}
			{(password.isDirty && password.isEmpty || password.minLengthError) ?
				<Password 
					value={password.value}
					onChange={e => password.onChange(e)}
					onBlur={e => password.onBlur(e)}
					placeholder="Password" 
					style = {{border: '1px solid #EB5757'}}/> 
				: <Password
					value={password.value}
					onChange={e => password.onChange(e)}
					onBlur={e => password.onBlur(e)}
					placeholder="Password"  />
 
			}
			
			{/* Кнопка */}
			<label className="front__label">
				<input className="front__checkbox" name="checkbox" type="checkbox"/>
				<span className="front__checkbox_new"></span>
				<span className="front__remember">Запомнить меня</span>
			</label>

			<Link className="front__forgot" to='/recover-password'>Forgot password?</Link>

			<div className="front__wrapper">
						
				<Button 
					type = "submit" 
					text = "Sign up"
					disabled = {!email.inputValid || !password.inputValid}
				/>
				<div className="front__social">
					<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0)">
							<path d="M7.46009 13.8338C8.12293 11.8284 9.40214 10.0836 11.1153 8.84821C12.8284 7.61286 14.8879 6.95008 16.9999 6.95442C19.3941 6.95442 21.5588 7.80442 23.2588 9.19558L28.2058 4.25C25.1911 1.62208 21.3278 0 16.9999 0C10.2991 0 4.53043 3.82217 1.75659 9.42083L7.46009 13.8338Z" fill="#EA4335"/>
							<path d="M22.7234 25.5184C21.1792 26.5143 19.2185 27.0456 17 27.0456C14.8964 27.0499 12.8447 26.3924 11.1354 25.1662C9.42606 23.94 8.14578 22.2071 7.47577 20.213L1.75244 24.5579C3.15671 27.4002 5.3299 29.7917 8.02519 31.4607C10.7205 33.1298 13.8298 34.0095 17 34C21.1551 34 25.1246 32.5224 28.0982 29.75L22.7248 25.5184H22.7234Z" fill="#34A853"/>
							<path d="M28.0982 29.75C31.2078 26.8486 33.2265 22.5306 33.2265 17C33.2265 15.9941 33.0721 14.9132 32.8412 13.9088H17V20.4779H26.1177C25.6686 22.6865 24.4602 24.3964 22.7248 25.5184L28.0982 29.75Z" fill="#4A90E2"/>
							<path d="M7.47591 20.2131C7.12933 19.1774 6.95327 18.0922 6.95458 17.0001C6.95458 15.8922 7.13166 14.8283 7.46033 13.8338L1.75683 9.4209C0.590034 11.7764 -0.0114466 14.3715 0.000164977 17.0001C0.000164977 19.7201 0.630582 22.2842 1.75258 24.558L7.47591 20.2131Z" fill="#FBBC05"/>
						</g>
						<defs>
							<clipPath id="clip0">
								<rect width="34" height="34" fill="white"/>
							</clipPath>
						</defs>
					</svg>
				</div>
			</div>
		</form>
		
	);
	
}


export default Form;