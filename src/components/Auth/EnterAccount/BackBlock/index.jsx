// import './BackBlock.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { navigate } from '@reach/router';
import Button from '../../../Button';
// import EmailForm from '../../EmailForm';
// import Email from '../../Email';
// import Password from '../../Password';
// import { CSSTransition } from 'react-transition-group';
// import LoginForm from '../../LoginForm';


function BackBlock({title, text, btnContent})  {
	BackBlock.propTypes = {
		title: PropTypes.string,
		text: PropTypes.string,
		btnContent: PropTypes.string,
	};
	
	return (
		
		<div className="back__content">
			<h1 className="back__title">{title}</h1>
			<p className="back__text">{text}</p>
			<form  
				className="back__form"
				onSubmit={event => {
					event.preventDefault();
					event.target.reset();
					navigate('/');
				}}
			>
				<Button type="submit" text={btnContent}/>
					
			</form>
		</div>
		
		
	);
	
}


export default BackBlock;