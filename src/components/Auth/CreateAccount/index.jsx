import './CreateAccount.scss';
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';	
import BackBlock from './BackBlock/index';
import FrontBlock from './FrontBlock/index';
// import { connect } from "react-redux"
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { _getCount } from '../../../store/selectors';
// import { incrementValue, fetchUserData } from '../../../store/actions';


 
function CreateAccount()  {
	// const count = useSelector(_getCount);
	// const dispatch = useDispatch();

	// const handleIncrementValue = () => {
	// 	dispatch(incrementValue());
	// };

	// useEffect(() => {
	// 	dispatch(fetchUserData());
	// }, []);

	
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
			{/* <div className="App">
				<p>Count: {count}</p>
				<button onClick={handleIncrementValue}>+</button>
			</div> */}
			
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
			{/* <FrontBlock 
				title="Create account"
				btnContent="Sign up"
			/> */}


		</div>
			
		
		
		
	);
	
}


export default CreateAccount;