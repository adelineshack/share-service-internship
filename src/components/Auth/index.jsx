import './Auth.scss';
import React, { useEffect } from 'react';
import {  Router } from '@reach/router';
// import PropTypes from 'prop-types';

import CreateAccount from './CreateAccount/index';
import SuccessAuth from './CreateAccount/SuccessAuth';
import EnterAccount from './EnterAccount';
import RecoverPassword from './RecoverPassword';
import ReplyRecover from './RecoverPassword/ReplyRecover/index';
import ChangePassword from './ChangePassword';
import ChangedPassword from './ChangePassword/ChangedPassword';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Profile from './../Profile/index';





function Auth()  {

	useEffect(() => {
		const bg = document.querySelector('.mouse-parallax-bg');
		window.addEventListener('mousemove', function(e) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;  
			bg.style.transform = 'translate(' + x * 50 + 'px, ' + y * 50 + 'px)';
		});
		
	}, []);
	
	

	return (
		<>
			
			<div className="auth">
				<svg className="mouse-parallax-bg" width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect opacity="0.4" x="149.193" y="480" width="37.4737" height="464" transform="rotate(44.3222 149.193 480)" fill="#5063EE"/>
					<rect opacity="0.4" x="424.193" y="-113" width="34.3083" height="464" transform="rotate(44.3222 424.193 -113)" fill="#5063EE"/>
					<rect opacity="0.4" x="831.193" y="591" width="34.3083" height="464" transform="rotate(44.3222 831.193 591)" fill="#5063EE"/>
					<rect opacity="0.4" x="1236.19" y="-178" width="34.3083" height="464" transform="rotate(44.3222 1236.19 -178)" fill="#5063EE"/>
					<rect x="672.972" y="-288" width="20.4484" height="623.983" transform="rotate(44.3222 672.972 -288)" fill="#515360"/>
					<rect x="1252.34" y="-121" width="20.4484" height="363.408" transform="rotate(44.3222 1252.34 -121)" fill="#515360"/>
					<rect x="1505.91" y="412" width="20.4484" height="470.501" transform="rotate(44.3222 1505.91 412)" fill="#515360"/>
					<rect opacity="0.4" x="1550.19" y="297" width="34.3083" height="464" transform="rotate(44.3222 1550.19 297)" fill="#5063EE"/>
					<rect x="126.972" y="588" width="20.4484" height="279.668" transform="rotate(44.3222 126.972 588)" fill="#515360"/>
					<rect x="822.402" y="546" width="20.4484" height="279.668" transform="rotate(44.3222 822.402 546)" fill="#515360"/>
					<circle opacity="0.21" cx="462" cy="67" r="51" fill="#728CB2"/>
					<circle opacity="0.21" cx="78.5" cy="694.5" r="87.5" fill="#728CB2"/>
					<circle opacity="0.21" cx="490" cy="905" r="123" fill="#728CB2"/>
					<circle opacity="0.21" cx="1367" cy="412" r="123" fill="#728CB2"/>
				</svg>
				
				{/* <img src="../../img/Pattern.svg" alt="bg" className="mouse-parallax-bg"/> */}
			
				{/* <div className="mouse-parallax-bg"> */}
				<div className="container">
					<Router>
					
						<CreateAccount path="/" exact/>
						<SuccessAuth path="/success-auth" />
						<EnterAccount path="/enter-account" />
						<RecoverPassword path="/recover-password" />
						<ReplyRecover path="/reply-recover" />
						<ChangePassword path="/auth/forgot_password/:token" />
						<ChangedPassword path="/changed-password" /> 
						<Profile path="/profile" />
						
					</Router>
				</div>
			</div>
		</>
		
	);
	
}



export default Auth;