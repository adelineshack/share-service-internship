import './SuccessAuth.scss';
import React from 'react';
// import BackBlock from './AuthComp/BackBlock';
// import PropTypes from 'prop-types';

// import { Link } from '@reach/router';
// import FrontBlock from './AuthComp/FrontBlock/index';
// import Button from '../Buttons';
import { CSSTransitionGroup } from 'react-transition-group';


function SuccessAuth()  {
	return (
		<div className="success-auth">
			

			<CSSTransitionGroup 
				component="div"
				className="back"
				transitionName="successBack"
				transitionAppear={true}
				transitionAppearTimeout={1000}
				transitionEnter={true}
				transitionLeave={false}>

				
				<div className="back__content">
					<h1 className="back__title">You successfully authorizied!</h1>
					<p className="back__text">Instructions was sent to you email. Follow the instractions.</p>
				
				</div>

				

			</CSSTransitionGroup>
			
			
			
			<CSSTransitionGroup
				component="div"
				transitionName="successFront"
				transitionAppearTimeout={1000}
				transitionAppear={true}
				transitionEnter={true}
				transitionLeave={false}
			>

				<div className="front">
					<div className="front__content">
						<svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M99 51C99 77.5097 77.5097 99 51 99C24.4903 99 3 77.5097 3 51C3 24.4903 24.4903 3 51 3C77.5097 3 99 24.4903 99 51ZM102 51C102 79.1665 79.1665 102 51 102C22.8335 102 0 79.1665 0 51C0 22.8335 22.8335 0 51 0C79.1665 0 102 22.8335 102 51ZM80.2096 29.887C80.6995 29.219 80.5551 28.2803 79.887 27.7904C79.219 27.3005 78.2803 27.4449 77.7904 28.113L45.8595 71.6551L25.095 49.4749C24.5289 48.8701 23.5796 48.8388 22.9749 49.405C22.3701 49.9711 22.3388 50.9204 22.905 51.5251L44.905 75.0251L46.1405 76.3449L47.2096 74.887L80.2096 29.887Z" fill="#6FCF97"/>
						</svg>
					</div>
				</div>
				
			
			</CSSTransitionGroup>
				
			
		</div>
		
	);
	
}


export default SuccessAuth;