import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';



function FrontBlock({title})  {
	FrontBlock.propTypes = {
		title: PropTypes.string
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