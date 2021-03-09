import './ReplyRecover.scss';
import React from 'react';
// import Button from '../../Buttons';
// import PropTypes from 'prop-types';
// import Button from '../../../Buttons';
// import { Link } from '@reach/router';
import { CSSTransitionGroup } from 'react-transition-group';


function ReplyRecover()  {
	return (
		
		<div className="reply-recover">
			<div className="back">

				<CSSTransitionGroup
					transitionName="backReplyTransition"
					transitionAppear={true}
					transitionAppearTimeout={1000}
					transitionEnter={true}
					transitionLeave={true}
				>
					
					<div className="back__content">
						<h1 className="back__title">We get your call.</h1>
						<p className="back__text">Instructions was sent to you email. Please, follow the instructions.</p>
					
					</div>

				</CSSTransitionGroup>
				
			</div>
			
			<CSSTransitionGroup
				transitionName="frontReplyTransition"
				component="div"
				transitionAppear={true}
				transitionAppearTimeout={1000}
				transitionEnter={true}
				transitionLeave={true}
			>
						
				<div className="front">
					<div className="front__content">			
					</div>
				
				</div>

			</CSSTransitionGroup>
				
				
			


		</div>
		
	);
	
}
// BackBlock.propTypes = {
// 	title: PropTypes.string,
// 	text: PropTypes.string,
// 	btn: PropTypes.string
// };

export default ReplyRecover;