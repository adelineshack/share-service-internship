import './CreateAccount.scss';
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';	
import BackBlock from './BackBlock/index';
import FrontBlock from './FrontBlock/index';


 
function CreateAccount()  {

	return (
		
		<div className="create-account">
			<div className="back">
				<CSSTransitionGroup
					transitionName="backCreateTransition"
					transitionAppear={true}
					transitionEnterTimeout={3000}
					transitionEnter={true}>
					
					<BackBlock />

				</CSSTransitionGroup>
				
				
			</div>
			
			<CSSTransitionGroup
				transitionName="frontCreateTransition"
				transitionAppear={true}
				transitionEnterTimeout={500}
				transitionEnter={true}
			>
					
				<FrontBlock 
					title="Create account"
					btnContent="Sign up"
				/>

			</CSSTransitionGroup>

		</div>
			
		
		
		
	);
	
}


export default CreateAccount;