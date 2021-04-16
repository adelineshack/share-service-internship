import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GoalsFamily.scss';
import Carousel from 'react-elastic-carousel';
import { getGoals } from '../../../store/actions';
import { getGoalsId, getJoined } from '../actions/actions';
import { useParams } from '@reach/router';
import { joinGoals, getMyParties } from './../../../store/actions/index';
import { navigate } from '@reach/router';

function GoalsFamily() {
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();


	const params = useParams();
	const idG = params.id;
	const goalsObj = useSelector((state) => state.goals.goalsId);
	const joinedGoals = useSelector((state) => state.goals.myParties);
	

	//для иконок юзеров
	const joined = useSelector((state) => state.goals.joined);
	let goals = useSelector((state) => state.goals.goals);
	const SHOW_USERS = 5;
	const joinedUsers = joined.slice(0, SHOW_USERS);
	const joinedLenght = joined.length;
	const hiddenUsers = joinedLenght - SHOW_USERS;
	console.log('присоединились');
	console.log(joined);
	console.log('обрезанный');
	console.log(joinedUsers);
	
	const filteredJoinedGoals = joinedGoals.filter( goal => {
		
		if (+goal.goal.id === +idG) {
			return true;
		}
	});

	console.log(filteredJoinedGoals);

	useEffect(() => {
		dispatch(getGoals());
		dispatch(getGoalsId(idG));
		dispatch(getJoined(idG));
		dispatch(getMyParties());
	}, []);

	

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 500, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 3 },
	];

	const handlerJoinFamily = () => {
		dispatch(joinGoals(idG));
		setMessage('Подождите, пока администратор одобрит вашу заявку');
	};
	return (
		idG,
		(
			<div className="body-content-container">
				<div className="body-back">
					<div className="back-container">
						<div className="gradient"></div>
						<img
							src={goalsObj.bg_image}
							alt="background"
							className="body-back-1"
						></img>
					</div>
					<div className="goal_famimly_title">
						<div className="goal-img-container">
							<img
								src={goalsObj.image}
								alt="spotify"
								className="spotify"
							/>
						</div>
						<div className="spotify-title">{goalsObj.title}</div>
						<input
							type="button"
							className="goal-button-join all-buttons"
							// value=value="Вступить в тусу"
							value= { (filteredJoinedGoals.length === 0) ? "Вступить в тусу" : "Уже в тусе"}
							disabled = { (filteredJoinedGoals.length === 0) ? false : true }
							onClick = { handlerJoinFamily }
							
						></input>
						<div className = "waiting-approval">{message}</div>
					</div>
					<div className="goal-text">{goalsObj.description}</div>
					<div className="joined">
						{ 
							( hiddenUsers < 0 ) ?  (
								joined.map(joinedIcons => (
									<div key = {joinedIcons.thumbnail} className="icon-joined-container">
										<img
											className="icon-joined"
											src={(!joinedIcons.thumbnail) ? "/images/default-photo.jpg" : joinedIcons.thumbnail}
										/>
									</div>
								))
							) :
								(
									<div className="joinedAndNum">
										{joinedUsers.map(joinedIcons => (
											<div key = {joinedIcons.thumbnail} className="icon-joined-container">
												<img
													className="icon-joined"
													src={(!joinedIcons.thumbnail) ? "/images/default-photo.jpg" : joinedIcons.thumbnail}
												/>
											</div>
										))}
										<div className="icon-joined-num">{hiddenUsers}</div>
									</div>
								)
						}
					</div>
				</div>
				<div className="body-content">
					<Carousel breakPoints={breakPoints}>
						{goals.map((item) => (
							<div className="card" key={item.id} 
								onClick={() => {
									navigate(`/goal/${item.id}`);
								}
							
								}>
								<div className="goalBG">
									<img
										src={item.bg_image}
										className="goalBG"
									/>
								</div>
								<div className="body-goal">
									<div className="goalIcon">
										<img
											src={item.image}
											className="goalIconImg"
										></img>
									</div>
									<div className="titleDescr">
										<div className="goal-card-title">
											{item.title}
										</div>
										<div className="goalDescription">
											{item.description}
										</div>
									</div>
								</div>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		)
	);
}

export default GoalsFamily;
