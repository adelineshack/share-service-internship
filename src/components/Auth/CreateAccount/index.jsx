import './CreateAccount.scss';
import React from 'react';


import { CSSTransitionGroup } from 'react-transition-group';	
import BackBlock from './BackBlock/index';
import FrontBlock from './FrontBlock/index';




function CreateAccount()  {
	// const [inProp, setInProp] = useState(false);
	
	return (

		<div className="create-account">
			<div className="back">
				<CSSTransitionGroup
					transitionName="backCreateTransition"
					transitionAppear={true}
					transitionAppearTimeout={3000}
					transitionEnter={true}
					transitionLeave={true}>
					
					<BackBlock />

				</CSSTransitionGroup>
				
				
			</div>
			
			<CSSTransitionGroup
				transitionName="frontCreateTransition"
				// timeout={3000}
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionLeaveTimeout={500}
				transitionEnter={true}
				transitionExit={true}
				transitionLeave={true}
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