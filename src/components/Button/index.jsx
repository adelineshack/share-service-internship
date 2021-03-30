import './Button.scss';
import React from 'react';
import PropTypes from 'prop-types';
// import useInput from './../Auth/ValidationHook/index';
function Button(props)  {
	// const email = useInput('', {isEmpty: true, minLength: 5, isEmail: true});
	
	return (
		<button 
			className = "button"
			// disabled = {!email.inputValid}
			type = 'submit'
			disabled = {props.disabled}
			onClick = { props.onClick }
		>

			{props.text}
		</button>
	);
	
}
Button.propTypes = {
	text: PropTypes.string,
	disabled: PropTypes.func,
	btn: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;