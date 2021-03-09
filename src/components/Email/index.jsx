import { PropTypes } from 'prop-types';
import React from 'react';
// import Button from '../Buttons';
import './Email.scss';
// import { navigate } from '@reach/router';




const Email = (props) => {

	Email.propTypes = {
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
				style = {props.style}
				required 
				className="email-form" 
				name="email" type="email" 
				placeholder="Email"
			/>
				
		</>
	);
};

export default Email;