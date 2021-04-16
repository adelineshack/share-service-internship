import React, { useEffect, useState } from 'react';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import './GoalsMyParties.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	getMyParties,

} from './../../../store/actions/index';
import { navigate } from '@reach/router';
// import ContentLoader from 'react-content-loader';
import '../GoalsFamily/GoalsFamily.scss';


function GoalsMyParties() {
	
	const dispatch = useDispatch();
	const [skeleton, setSketelon] = useState(true);

	useEffect(() => {
	
		dispatch(getMyParties(setSketelon));
	
		// dispatch(getGoals());
	}, []);

	//Получение данных из стора
	const goalFamilies = useSelector((state) => state.goals.myParties);
	console.log('goalFamilies');
	console.log(goalFamilies);

	// if (party) {
	// 	members = party.members;
	// }

	return (
		<div className='parties__wrapper'>
			<h1 className="parties__title">My parties</h1>
			
			

			{  (skeleton) ? 
			
				<div className="parties__grid_default">					
					<div className="parties__item_default"></div>
					<div className="parties__item_default"></div>
					<div className="parties__item_default"></div>
					<div className="parties__item_default"></div>
				</div> 
				
				:
				<>
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
									{/* { party.members.map(user => (
								<div key = {user.id} className="parties__user-icon">
									<img
										className="parties__thumbnail"
										// src={user.avatar.thumbnail}
										src={!(user.avatar) ? "/images/default-photo.jpg" : user.avatar.thumbnail}
										// alt={party.admin.first_name}
									/>
								</div>
							)) } */}
							
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
				</>
			}
			


			
		</div>
		
	);
}
// const MyLoader = () => (

// 	<ContentLoader viewBox="0 0 380 70">
// 		{/* Only SVG shapes */}    
// 		<rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
// 		<rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
// 		<rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
// 	</ContentLoader>
// );

export default GoalsMyParties;
