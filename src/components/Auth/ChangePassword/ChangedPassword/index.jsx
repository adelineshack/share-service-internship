import './ChangedPassword.scss';
import React from 'react';
import { navigate } from '@reach/router';



function ChangedPassword()  {
	return (
		<div className="changed-pass">
			<div className="back">
				<div className="back__content">
					<h1 className="back__title">Successfuly changed your password !</h1>
					<div className="back__close" onClick = { navigate('/auth/enter-account') }>
						<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M2.56069 0.439342C1.9749 -0.146446 1.02516 -0.146446 0.43937 0.439342C-0.146416 1.02513 -0.146416 1.97488 0.43937 2.56066L15.3787 17.5L0.43937 32.4393C-0.146416 33.0251 -0.146416 33.9749 0.43937 34.5607C1.02516 35.1465 1.9749 35.1465 2.56069 34.5607L17.5 19.6213L32.4394 34.5607C33.0252 35.1465 33.9749 35.1465 34.5607 34.5607C35.1465 33.9749 35.1465 33.0251 34.5607 32.4393L19.6214 17.5L34.0607 3.06066C34.6465 2.47488 34.6465 1.52513 34.0607 0.939343C33.4749 0.353556 32.5252 0.353556 31.9394 0.939343L17.5 15.3787L2.56069 0.439342Z" fill="#EEEEEE"/>
						</svg>
					</div>
					
				</div>
			</div>
			
		</div>
		
	);
	
}
// BackBlock.propTypes = {
// 	title: PropTypes.string,
// 	text: PropTypes.string,
// 	btn: PropTypes.string
// };

export default ChangedPassword;