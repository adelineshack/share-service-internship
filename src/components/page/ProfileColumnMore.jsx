import React from 'react';
import './ProfileColumn.scss';
import './ProfileColumnMore.scss';

function ProfileColumnMore(props) {
	return (
		<div
			className={`profile-column-more ${
				props.showModal ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className="background">
				{/* <img src="/images/back1.svg" alt="1" className="back1" />
				<img src="/images/back2.png" alt="2" className="back2" />
				<img src="/images/back3.png" alt="3" className="back3" />
				<img src="/images/back4.png" alt="4" className="back4" />
				<img src="/images/back5.png" alt="5" className="back5" />
				<img src="/images/back6.png" alt="6" className="back6" /> */}
			</div>
			<div className="main-content">
				<div className="person-card-more">
					<input
						placeholder="Annette Black, 22"
						className="input-more"
					/>
					<input
						placeholder="annetBlack@mail.rom"
						className="input-more"
					/>
					<input placeholder="@Ablack" className="input-more" />
					<button className="more-save">Save</button>
					<button
						className="more-change-password"
						onClick={() => props.ChangePassword()}
					>
						Change password
					</button>
					<button
						className="more-delete"
						onClick={() => props.Delete()}
					>
						Delete account
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProfileColumnMore;
