import React, { useState } from 'react';
import './ProfileColumn.scss';
import ProfileColumnMore from './ProfileColumnMore';
import './button.scss';

function ProfileColumn(props) {
	const [handleModal, setHandleModal] = useState(false);

	const Change = () => {
		return setHandleModal(!handleModal);
	};

	return (
		<div
			className={`profile-column ${
				props.profileColumn ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className="background">
				<img src="/images/back1.svg" alt="1" className="back1" />
				<img src="/images/back2.png" alt="2" className="back2" />
				<img src="/images/back3.png" alt="3" className="back3" />
				<img src="/images/back4.png" alt="4" className="back4" />
				<img src="/images/back5.png" alt="5" className="back5" />
				<img src="/images/back6.png" alt="6" className="back6" />
			</div>
			<div className="main-content">
				<ProfileColumnMore
					Delete={() => props.Delete()}
					showModal={handleModal}
					Save={() => props.Save()}
					ChangePassword={() => props.ChangePassword()}
					Success={() => props.Success()}
				/>
				<div className="header">
					<div className="name">My profile</div>
				</div>
				<div onClick={() => Change()}>
					<img
						src="/images/customization.png"
						alt="customization"
						className="customization"
					/>
				</div>
				<div className="person-card">
					<div className="card-photo">
						<img
							src="/images/photo-profile.png"
							alt="person"
							className="card-photo"
						/>
					</div>
					<div className="card-name-person">Annete Black, 22</div>
					<div className="card-mail">annetBlack@mail.rom</div>
					<div className="card-name">@Ablack</div>
					<button className="signOut" onClick={() => props.Change()}>
						Sing out
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProfileColumn;
