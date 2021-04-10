import React from 'react';
import { changeUser } from './actions/actions';
import './ProfileColumn.scss';
import './ProfileColumnMore.scss';
import { useDispatch } from 'react-redux';
import './button.scss';

function ProfileColumnMore(props) {
	const dispatch = useDispatch();
	const handleUserChange = (event) => {
		event.preventDefault();
		const newUserData = {
			// from form
			first_name: event.target.elements.userName.value,
		};

		dispatch(changeUser(newUserData));
	};

	return (
		<div
			className={`profile-column-more ${
				props.showModal ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className="main-content">
				<div className="person-card-more">
					<form
						onSubmit={(event) => handleUserChange(event)}
						className="form"
					>
						<div className="card-inputs">
							<input
								placeholder="Annete Black, 22"
								className="input-more"
								type="text"
								name="userName"
							/>
							<input
								value="annetBlack@mail.rom"
								className="input-more"
							/>
							<input value="@Ablack" className="input-more" />
						</div>
						<input
							type="submit"
							value="Save"
							className="more-save"
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
		</div>
	);
}

export default ProfileColumnMore;
