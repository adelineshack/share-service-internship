import React, { useEffect } from 'react';
import './GoalsTop.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getGoalsTop } from './../../../store/actions/index';
import { navigate } from '@reach/router';


function GoalsTop() {
	
	const dispatch = useDispatch();
	let week = 'day';
	let goals = [];
	useEffect(() => {
	
		dispatch(getGoalsTop(week));
		
	}, []);

	const topGoalsState = useSelector((state) => state.goals.topGoals[0]);

	if (topGoalsState) {
		goals = topGoalsState.goals;
	}
	
	const slicedGoals = goals.slice(0,10);

	return (
		
		<div className="top__wrapper">
			<h1 className="top__title">Top-10 goals</h1>
			<div className="top__grid">
				
				{slicedGoals.map((goal) => (
					
					<div 
						key={goal.id} 
						className="top__item"
						style={{ backgroundImage: `url(${goal.bg_image})` }}
						onClick = { () => navigate(`/goal/${goal.id}`) }
					>


						<div className="top__name">
							{goal.name}
						</div>
					

					
						<div className="top__descr">
							<div className="top__circle">
								<img
									className="top__icon"
									src={goal.image}
									alt={goal.title}
								/>
							</div>
							
						</div>
						<div className="title">
							{goal.title}
						</div>
						
					</div>
				))}
			</div>
		</div>
	
	);
}

export default GoalsTop;
