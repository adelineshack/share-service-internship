import './RecoverPassword.scss';
import React from 'react';
// import Button from '../../Buttons';
// import PropTypes from 'prop-types';
// import Button from '../../../Buttons';
// import { navigate } from '@reach/router';
// import Email from '../../Email';
// import Button from '../../Button';
import Form from './Form';
import { CSSTransitionGroup } from 'react-transition-group';


function RecoverPassword()  {
	return (

		<div className="recover-password">
			<div className="back">
				<CSSTransitionGroup
					transitionName="backRecoverTransition"
					transitionAppear={true}
					transitionEnterTimeout={3000}
					transitionEnter={true}
				>
					
					<div className="back__content">
						<h1 className="back__title">No panic!</h1>
						<p className="back__text">Sometimes it happens. <br/> We will go through it together</p>
					
					</div>

				</CSSTransitionGroup>
				
			</div>
			<div className="front">
				<CSSTransitionGroup
					transitionName="backRecoverTransition"
					transitionAppear={true}
					transitionEnterTimeout={3000}
					transitionEnter={true}
				>
						
					<div className="front__content">
						<div className="front__title">Recover password</div>
						<Form />
					</div>
				
					

				</CSSTransitionGroup>
			</div>


		</div>
		
	);
	
}
// BackBlock.propTypes = {
// 	title: PropTypes.string,
// 	text: PropTypes.string,
// 	btn: PropTypes.string
// };

export default RecoverPassword;