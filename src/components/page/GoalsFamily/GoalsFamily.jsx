import React from 'react';
import './GoalsFamily.scss';
import Carousel from 'react-elastic-carousel';
import Card from './card';

function GoalsFamily() {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 500, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	];
	return (
		<div className="body-content-container">
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
					<Card number="1" />
					<Card number="2" />
					<Card number="3" />
					<Card number="4" />
					<Card number="5" />
					<Card number="6" />
					<Card number="7" />
					<Card number="8" />
				</Carousel>
			</div>
		</div>
	);
}

export default GoalsFamily;
