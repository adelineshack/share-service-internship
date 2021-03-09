import React from 'react';
import './Password.scss';
import PropTypes from 'prop-types';

const Password = (props) => {

	Password.propTypes = {
		placeholder: PropTypes.string,
		style: PropTypes.string,
		value: PropTypes.string,
		onChange: PropTypes.func,
		onBlur: PropTypes.func,
	};

	return (
		<>	
			<input
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
				required 
				className="password-form" 
				name="password" type="password" 
				placeholder = {props.placeholder} 
				style = {props.style}
			/>
		</>
	);


};

export default Password;