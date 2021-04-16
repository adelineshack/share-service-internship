import React from 'react';
import { navigate } from '@reach/router';
import Button from '../../../Button';



//CreateAccount

function BackBlock()  {

	return (
		
		<div className="back__content">
			<h1 className="back__title">Hello, Friend!</h1>
			<p className="back__text">let’s find some like-minded people. If you already had an account please sing in.</p>
					
			<form  
				className="back__form"
				onSubmit={event => {
					event.preventDefault();
					event.target.reset();
					navigate('/auth/enter-account');
				}}
			>
					
				<Button type="submit" text="Sign in" />
			</form>
					
		</div>
		
	);
	
}


export default BackBlock;