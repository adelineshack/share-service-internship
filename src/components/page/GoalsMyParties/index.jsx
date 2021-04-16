import React, { useEffect } from 'react';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './GoalsMyParties.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	getMyParties,
} from './../../../store/actions/index';
import { navigate } from '@reach/router';
import '../GoalsFamily/GoalsFamily.scss';


function GoalsMyParties() {
	
	const dispatch = useDispatch();
	

	useEffect(() => {
	
		dispatch(getMyParties());
		// dispatch(getGoals());
	}, []);

	//Получение данных из стора
	const goalFamilies = useSelector((state) => state.goals.myParties);
	console.log(goalFamilies);

	return (
		<div className='parties__wrapper'>
			<h1 className="parties__title">My parties</h1>
			<h2 className = 'parties__message'>{ (goalFamilies.length === 0) ? 'Вы еще пока не вступили ни в одну семью :(' : ''}</h2>
			<div className="parties__grid">
				
				{goalFamilies.map((party) => (
					<div 
						key={party.id} 
						className="parties__item"
						style={{ backgroundImage: `url(${party.goal.bg_image})` }}
						onClick = { () => navigate(`/goal/my-parties/${party.id}`) }
					>


						<div className="parties__name">
							{party.name}
						</div>
						
						
						{/* <div className="parties__admin">
							<div className="parties__user-icon">
								<img
									className="parties__thumbnail"
									src={(!party.admin.avatar) ? "/images/default-photo.jpg" : party.admin.avatar.thumbnail}
									alt={party.admin.first_name}
								/>
							</div>
						</div> */}

						<div className="parties__users">
							<div className="parties__admin">
								<div className="parties__user-icon">
									<img
										className="parties__thumbnail"
										src={(!party.admin.avatar) ? "/images/default-photo.jpg" : party.admin.avatar.thumbnail}
										alt={party.admin.first_name}
									/>
								</div>
							</div>
							{ ((party.members.length - 5) < 0) ?
								party.members.map(user => (
									<div key = {user.id} className="parties__user-icon">
										<img
											className="parties__thumbnail"
											src={(!user.avatar) ? "/images/default-photo.jpg" : user.avatar.thumbnail}
										/>
									</div>
								)) :
								<div className="joinedAndNum">
									{
										party.members.slice(0,4).map(user => (
											<div key = {user.id} className="parties__user-icon">
												<img
													className="parties__thumbnail"
													src={(!user.avatar) ? "/images/default-photo.jpg" : user.avatar.thumbnail}
												/>
											</div>
										))
									}
									<div className="icon-joined-num">{party.members.length - 5}</div>
								</div>
							}
							
						</div>
						<div className="parties__descr">
							<div className="parties__circle">
								<img
									className="parties__icon"
									src={party.goal.image}
									alt={party.goal.title}
								/>
							</div>
							
						</div>
						<div className="title">
							{party.goal.title}
						</div>
						
						
					</div>
				))}
			</div>
		</div>
		
	);
}

export default GoalsMyParties;
