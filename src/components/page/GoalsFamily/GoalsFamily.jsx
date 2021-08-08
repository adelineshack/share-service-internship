import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GoalsFamily.scss';
import Carousel from 'react-elastic-carousel';
//import Card from './card';
import { getGoals } from '../../../store/actions';
//import { useDispatch, useSelector } from 'react-redux';

function GoalsFamily() {
	const dispatch = useDispatch();

	const id = useSelector((state) => state.goals.goals.id);

	useEffect(() => {
		dispatch(getGoals());
	}, []);

	let goals = useSelector((state) => state.goals.goals);

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 500, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 3 },
	];
	return (
		<div className="body-content-container">
			{console.log('это айди')}
			{console.log(id)}
			<div className="body-back">
				<img
					src="/images/body_back.png"
					alt="background"
					className="body-back-1"
				></img>
				<div className="goal_famimly_title">
					<img
						src="/images/spotify.png"
						alt="spotify"
						className="spotify"
					/>
					<div className="spotify-title">Spotify</div>
					<input
						type="button"
						className="goal-button-join all-buttons"
						value="Вступить в тусу"
					></input>
				</div>
				<div className="goal-text">
					Amet minim mollit non deserunt ullamco est sit aliqua dolor
					do amet sint. Velit officia consequat duis enim velit
					mollit. Exercitation veniam consequat sunt nostrud amet.Amet
					minim mollit non deserunt ullamco est sit aliqua dolor do
					amet sint. Velit officia consequat duis enim velit mollit.
					Exercitation veniam consequat sunt nostrud amet.
				</div>
				<div className="joined">joined</div>
			</div>
			<div className="body-content">
				<Carousel breakPoints={breakPoints}>
					{goals.map((item) => (
						<div className="card" key={item.id}>
							<div className="goalBG">
								<img src={item.bg_image} className="goalBG" />
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
	);
}

export default GoalsFamily;
