import React, {useState} from 'react';
// import { changeUser } from './actions/actions';
import './ProfileColumn.scss';
import './ProfileColumnMore.scss';
import './button.scss';
import { useDispatch } from 'react-redux';
import { changeUserName } from './actions/actions';

function ProfileColumnMore(props) {
	
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	// const [email, setEmail] = useState('');
	// const [nickname, setNickname] = useState(null);

	const id = props.userData.id;
	const userData = props.userData;



	const dispatch = useDispatch();

	console.log( userData );
	

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
							placeholder = { userData.first_name }
							className = "input-more"
							type = "text"
							name = "firstName"
							onChange = { e => setFirstName(e.target.value) }
							value = { firstName }
						/>
						<input
							placeholder = { userData.last_name }
							className = "input-more"
							type = "text"
							name = "lastName"
							onChange = { e => setLastName(e.target.value) }
							value = { lastName }
						/>
						<input
							className="input-more"
							// onChange = { e => setEmail(e.target.value) }
							value = { userData.email }
							placeholder = "Email"
						/>
						{/* <input 
							className="input-more" 
							onChange = { e => setNickname(e.target.value) }
							value = { nickname }
							placeholder = "Nickname"
						/> */}
					</div>
					<input
						type="submit"
						value="Save"
						className="more-save"
						onClick = { handleChangeName }
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
