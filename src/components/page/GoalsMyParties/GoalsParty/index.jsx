import React, {useEffect, useState} from 'react';
import './GoalsMyParty.scss';
import { useParams, navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { getParty, leaveParty } from '../../../../store/actions/index';
import '../../GoalsFamily/GoalsFamily.scss';



function GoalParty() {

	const dispatch = useDispatch();
	const params = useParams();
	const idParty = params.idParty;
	const party = useSelector((state) => state.goals.party);
	const [message, setMessage] = useState('');
	let membersParty = [];

	console.log('мемберсы');
	console.log(party);

	//для иконок юзеров
	const members = useSelector((state) => state.goals.party[0]);
	const SHOW_USERS = 5;
	//const joinedUsers = members.slice(0, SHOW_USERS);
	const joinedLenght = membersParty.length;
	//const hiddenUsers = joinedLenght - SHOW_USERS;

	if (members) {
		membersParty = members.members;
		
	}

	console.log(party);

	useEffect(() => {
		dispatch(getParty(idParty));
		
	}, []);

	const handlerLeave = () => {
		dispatch(leaveParty(idParty, errorMessage, handlerLeaved));
	};
	const errorMessage = () => {
		setMessage("Admin can't leave party");
	};
	const handlerLeaved = () => {
		navigate('/goal/my-parties');
	};

	return (
		<div className="party__container">
			
			<div className="party__bg">
				<img
					src={(!party) ? '' : party.goal.bg_image}
					alt="background"

				/>
			</div>

			<div className="party__header">
				
				<div className="party__header-wrap">

					<div className="party__header-icon">
						<img
							src={(!party) ? '' : party.goal.image}
							// src={party.goal.image}
							alt="spotify"
							className="spotify"
						/>
					</div>

					<div className="party__header-title-goal">
						{(!party) ? '' : party.goal.title}
					</div>

				


				</div>

				<div className="party__header-title">
					{(!party) ? '' : party.name}
				</div>
				<div className="party__header-wrap-btn">
					<button
						className="party__header-button"
						onClick = { handlerLeave }
					>
						Покинуть тусу
					</button>	

					<div className="party_admin-message">
						{ message }
					</div>
					
				</div>
				
				
			</div>

			
			<div className="goal-text">
					
			</div>

			<div className="party__content">

				<div className="party__content-wrap">
					<div className="party__users-title">
						Party members
					</div>
					<div className="party__users">

						{( (joinedLenght - SHOW_USERS) < 0 ) ?  (
							(!party) ? '' : party.membersParty.map(user => (
								<div key = {user.id} className="party__user-icon">
									<img
										className="party__thumbnail"
										src={(!user.avatar) ? "/images/default-photo.jpg" : user.avatar.thumbnail}
									/>
								</div>
							))) :

							<div className="joinedAndNum">
								{
									(!party) ? '' : party.membersParty.slice(0,SHOW_USERS).map(user => (
										<div key = {user.id} className="party__user-icon">
											<img
												className="party__thumbnail"
												src={(!user.avatar) ? "/images/default-photo.jpg" : user.avatar.thumbnail}
											/>
										</div>
									))
								}
								<div className="icon-joined-num1">{party.membersParty.length - SHOW_USERS}</div>
							</div>
						}
					</div>
				</div>
				
				<div className="party__content-wrap">
					<div className="party__users-title">
						Admin
					</div>
					<div className="party__admin">
						<div className="party__users">
						
							<div className="party__user-admin-icon party__user-icon">
								<img
									className="party__thumbnail"
									src={(!party) ? "/images/default-photo.jpg" : party.admin.avatar.thumbnail}
								/>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		
			
			
		</div>
		
	);
}

export default GoalParty;