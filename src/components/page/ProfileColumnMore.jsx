import React, { useState, 
	useEffect 
} 
	from 'react';
// import { changeUser } from './actions/actions';
import './ProfileColumn.scss';
import './ProfileColumnMore.scss';
import './button.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserName } from './actions/actions';

function ProfileColumnMore(props) {

	const id = props.userData.id;
	
	const userData = useSelector((state) => state.userInfo.userData);
	
	

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	
	useEffect(() => {
			
		setFirstName(userData.first_name);
		setLastName(userData.last_name);
	}, userData.id);



	const dispatch = useDispatch();

	
	const handleChangeName = () => {
	
		const newUserName = {
			first_name: firstName,
			last_name: lastName,
		};

		dispatch(changeUserName(newUserName, id));
		
	};


	return (
		<div
			className={`profile-column-more ${
				props.showModal ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className="background">
				<img src="/images/back4.png" alt="4" className="back4" />
				<img src="/images/back5.png" alt="5" className="back5" />
				<img src="/images/back6.png" alt="6" className="back6" />
			</div>
			{/* <div className="main-content"> */}
			<div className="person-card-more">
				<form
					onSubmit={(event) => {
						event.preventDefault();
						event.target.reset();
					}}
					className="form"
				>
					<div className="card-inputs">
						<input
							placeholder = { (!userData.first_name) ? 'Enter your first name' : userData.first_name }
							className = "input-more"
							type = "text"
							name = "firstName"
							onChange = { e => setFirstName(e.target.value) }
							value = { firstName }
						/>

						<input
							placeholder = { (!userData.last_name) ? 'Enter your last name' : userData.last_name }
							className = "input-more"
							type = "text"
							name = "lastName"
							onChange = { e => setLastName(e.target.value) }
							value = { lastName }
						/>
						<input
							className="input-more"
							value = { userData.email }
							placeholder = "Email"
						/>
					</div>
					<input
						type="submit"
						value="Save"
						className="more-save"
						onClick = { handleChangeName }
						disabled = { ( firstName && lastName && (firstName.length > 3) && (lastName.length > 3)) ? false : true }
					/>
				</form>
				<div className="delete-change-buttons">
					<button
						className="more-change-password all-buttons"
						onClick={() => props.ChangePassword()}
					>
							Change password
					</button>
					<button
						className="more-delete all-buttons"
						onClick={() => props.Delete()}
					>
							Delete account
					</button>
				</div>
			</div>
		</div>
		// </div>
	);
}

export default ProfileColumnMore;
