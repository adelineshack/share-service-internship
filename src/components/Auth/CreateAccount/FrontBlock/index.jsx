// import './FrontBlock.scss';
import React from 'react';
import PropTypes from 'prop-types';
// import { navigate } from '@reach/router';
// import Email from './../../../Email/index';
// import Password from '../../../Password';
// import Button from '../../../Button';
import Form from './Form';



//CreateAccount

function FrontBlock({title})  {
	FrontBlock.propTypes = {
		title: PropTypes.string,
	};
	
	return (
		<div className="front">
			<div className="front__content">
				<div className="front__title">{title}</div>
				<Form />
			</div>
            
		</div>
		
	);
	
}


export default FrontBlock;