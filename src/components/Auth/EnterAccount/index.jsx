import './EnterAccount.scss';
import React from 'react';
// import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import BackBlock from './BackBlock';
import FrontBlock from './FrontBlock';


function EnterAccount()  {
	
	return (
		
		<div className="enter-account">
			
			<div className="back">
				<CSSTransitionGroup
					transitionName="backEnterTransition"
					transitionAppear={true}
					transitionAppearTimeout={3000}
					transitionEnter={true}
					transitionLeave={true}>
					
					<BackBlock
						title="Welcome back!"
						text="To keep connected with us please login with your personal info."
						btnContent="Sign up"
					/>

				</CSSTransitionGroup>
			</div>
			
			
			<CSSTransitionGroup
				transitionName="frontEnterTransition"
				transitionAppear={true}
				transitionAppearTimeout={600}
				transitionEnter={true}
				transitionLeave={true}>

				<FrontBlock 
					title="Let’s make a party tonight."
				/>

			</CSSTransitionGroup>
			
		</div>
		
	);
	
}
// BackBlock.propTypes = {
// 	title: PropTypes.string,
// 	text: PropTypes.string,
// 	btn: PropTypes.string
// };

export default EnterAccount;