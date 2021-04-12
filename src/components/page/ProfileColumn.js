import React, { useState } from 'react';
import './ProfileColumn.scss';
import ProfileColumnMore from './ProfileColumnMore';
import './button.scss';
import { changeAvatar } from './actions/actions';
import { useDispatch } from 'react-redux';


function ProfileColumn(props) {
	const [handleModal, setHandleModal] = useState(false);
	

	const Change = () => {
		return setHandleModal(!handleModal);
	};

	const userData = props.userData;


	const dispatch = useDispatch();


	const changeAvatarHandler = (e) => {
		const file = e.target.files[0];
		dispatch(changeAvatar(file));
	};


	return (
		<div
			className={`profile-column ${
				props.profileColumn ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			{/* <div className="background">
				<img src="/images/back1.svg" alt="1" className="back1" />
				<img src="/images/back2.png" alt="2" className="back2" />
				<img src="/images/back3.png" alt="3" className="back3" />
				<img src="/images/back4.png" alt="4" className="back4" />
				<img src="/images/back5.png" alt="5" className="back5" />
				<img src="/images/back6.png" alt="6" className="back6" />
			</div> */}

			<div className="header">
				<div className="name">My profile</div>
			</div>


			<div className="main-content">
				
				

				
				<div className="card-photo">
					<div className="customization" onClick={() => Change()}>
						<img
							src="/images/customization.png"
							alt="customization"
							
						/>
					</div>

					<form className = 'card-photo__img'>
						

						<input
							type="file"
							className="avatar"
							id="avatar"
							// onInput={(event) => changeUserAvatar(event)}
							name="avatar"
							accept = 'image/*'
							onChange = { (e) => changeAvatarHandler(e) }
						/>

						<img
							src= { !(userData.avatar) 
								? "/images/default-photo.jpg" 
								: userData.avatar.original}
							alt="person"
							className="card-photo"
							name="card_photo"
						/>
						<label
							htmlFor="avatar"
							className="labelAvatar"
						></label>

						

						
					</form>
				</div>

					
			

				<div className="card-name-person">
					{userData.first_name}
				</div>
				<div className="card-mail">{userData.email}</div>
				{/* <div className="card-name">@Ablack</div> */}
						
				
					
					

				<button
					className="signOut all-buttons"
					onClick={() => props.Change()}
				>
						Sign out
				</button>

				

			</div>


			<ProfileColumnMore
				userData = { userData }
				Delete={() => props.Delete()}
				showModal={handleModal}
				Save={() => props.Save()}
				ChangePassword={() => props.ChangePassword()}
				Success={() => props.Success()}
			/>
		</div>
	);
}

export default ProfileColumn;
