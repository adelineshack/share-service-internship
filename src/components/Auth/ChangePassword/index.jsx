import './ChangePassword.scss';
import React from 'react';
import Form from './Form';



function ChangePassword()  {

	return (
		<div className="change-pass">
			<div className="back">
				<div className="back__content">
					<h1 className="back__title">Enter new password</h1>
					
					<Form />
					
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

export default ChangePassword;