import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GoalsFamily.scss';
import Carousel from 'react-elastic-carousel';
//import Card from './card';
import { getGoals } from '../../../store/actions';
import { getGoalsId, getJoined } from '../actions/actions';
import { useParams } from '@reach/router';
import { joinGoals } from './../../../store/actions/index';
function GoalsFamily() {
	const dispatch = useDispatch();

	const params = useParams();
	const idG = params.id;
	const goalsObj = useSelector((state) => state.goals.goalsId);

	useEffect(() => {
		dispatch(getGoals());
		dispatch(getGoalsId(idG));
		dispatch(getJoined(idG));
	}, []);

	const joined = useSelector((state) => state.goals.joined);
	let goals = useSelector((state) => state.goals.goals);

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 500, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 3 },
	];

	const handlerJoinFamily = () => {
		dispatch(joinGoals(idG));
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
							value="Вступить в тусу"
							onClick={handlerJoinFamily}
						></input>
					</div>
					<div className="goal-text">{goalsObj.description}</div>
					<div className="joined">
						{ joined.map(joinedIcons => (
							<div key = {joinedIcons.thumbnail} className="icon-joined-container">
								<img
									className="icon-joined"
									src={(!joinedIcons.thumbnail) ? "/images/default-photo.jpg" : joinedIcons.thumbnail}
								/>
							</div>
						)) }
					</div>
				</div>
				<div className="body-content">
					<Carousel breakPoints={breakPoints}>
						{goals.map((item) => (
							<div className="card" key={item.id}>
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
