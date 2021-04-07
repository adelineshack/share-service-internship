import React, {useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import './GoalsCatalog.scss';
import { useDispatch, useSelector} from "react-redux";
// import StackGrid from "react-stack-grid";
import { getGoalsCategories, getGoals} from './../../../store/actions/index';
import { navigate } from '@reach/router';



function GoalCatalog() {

	// const categories = [
	// 	{ id:1, title: 'Кино и сериалы', image: '/icon/categories/popcorn.svg', bg: 'linear-gradient(180deg, #8D98FA 0%, #5063EE 100%)' },
	// 	{ id:2, title: 'Музыка', image: '/icon/categories/headphones.png', bg: 'linear-gradient(180deg, #3DCCFC 0%, #0C637F 100%)' },
	// 	{ id:3, title: 'Облачные сервисы', image: '/icon/categories/cloud.png', bg: 'linear-gradient(180deg, #FFD166 0%, #83D483 100%)' },
	// 	{ id:4, title: 'Покупки', image: '/icon/categories/cart.png', bg: 'linear-gradient(180deg, #EF476F 0%, #F78C6B 100%)' },
		
	// ];

	// const goals = [
	// 	{ id:1, category: 'Музыка', title: 'Spotify', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/spotify.svg', bg: 'url(/images/goals/bg_spotify.jpg)'},
	// 	{ id:2, category: 'Кино и сериалы', title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
	// 	{ id:3, category: 'Покупки', title: 'Yandex Plus', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/yandex.svg', bg: 'url(/images/goals/bg_yandex.jpg)'},
	// 	{ id:4 },
	// 	{ id:5, category: 'Покупки', title: 'Youtube Premium', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/youtube.svg', bg: 'url(/images/goals/bg_youtube.jpg)'},
	// 	{ id:6, title: 'Apple', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/apple.svg', bg: 'url(/images/goals/bg_apple.jpg)'},
	// 	{ id:7 },
	// 	{ id:8, category: 'Кино и сериалы', title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
	// 	{ id:9, category: 'Музыка', title: 'Spotify', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/spotify.svg', bg: 'url(/images/goals/bg_spotify.jpg)'},
	// 	{ id:10, category: 'Кино и сериалы', title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
	// 	{ id:11, category: 'Покупки', title: 'Yandex Plus', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/yandex.svg', bg: 'url(/images/goals/bg_yandex.jpg)'},
	// 	{ id:12 },
	// 	{ id:13, category: 'Покупки',  title: 'Youtube Premium', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/youtube.svg', bg: 'url(/images/goals/bg_youtube.jpg)'},
	// 	{ id:14, category: 'Музыка', title: 'Apple', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/apple.svg', bg: 'url(/images/goals/bg_apple.jpg)'},
	// 	{ id:15 },
	// 	{ id:16, category: 'Кино и сериалы', title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
	// 	{ id:17, category: 'Музыка', title: 'Spotify', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/spotify.svg', bg: 'url(/images/goals/bg_spotify.jpg)'},
	// 	{ id:18, category: 'Кино и музыка', title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
	// 	{ id:19, category: 'Покупки', title: 'Yandex Plus', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/yandex.svg', bg: 'url(/images/goals/bg_yandex.jpg)'},
	// 	{ id:20 },
	// 	{ id:21, category: 'Покупки',  title: 'Youtube Premium', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/youtube.svg', bg: 'url(/images/goals/bg_youtube.jpg)'},
	// 	{ id:22, category: 'Музыка', title: 'Apple', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/apple.svg', bg: 'url(/images/goals/bg_apple.jpg)'},
	// 	{ id:23 },
	// 	{ id:24, category: 'Кино и сериалы', title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
		
	// ];

	
	
	const dispatch = useDispatch();
	

	useEffect(() => {
		
		dispatch(getGoalsCategories());
		dispatch(getGoals());

	}, []);
	
	
	const categories = useSelector(state => state.goals.categories);
	const goals = useSelector(state => state.goals.goals);

	console.log(goals);

	goals.map( item => item.bg_image = `url(${item.bg_image})`);

	const length = 6;

	let newGoals = [];

	for (let i = 0; i < goals.length; i += length) {
		newGoals.push(goals.slice(i, i + length));
	}

	console.log(newGoals);

	// const goalsCopy = JSON.parse(JSON.stringify(goals));
	// let newGoals = [], length = 8; 
	// while(goalsCopy.length) newGoals.push(goalsCopy.splice(0,length)); 

	newGoals.map(obj => {
		obj.splice(3, 0, {});
		obj.splice(6, 0, {});
		
	});

	window.newGoals = newGoals;
	window.goals = goals;
	
	const responsive = {
		0: {
			items: 4
		},
		600: {
			items: 4
		},
		1024: {
			items: 4
		}
	};

	// const filterCategories = () => {
	// 	categories.map((categories) => {
	// 		let filteredGoals = goals.filter(goals => {
	// 			if(goals.category === categories.title) {
	// 				return true;
	// 			}
	// 		});
	// 		console.log(filteredGoals);
	// 		return filteredGoals;
	// 	});
	// };
	const filterCategories = () => {
		dispatch(getGoals());
		
		categories.map((categories) => {
			let filteredGoals = goals.filter(goals => {
				if(goals.category === categories.title) {
					return true;
				}
			});
			console.log(filteredGoals);
			return filteredGoals;
		});
	};

	return (
		<div className="goals__container">
			<div className="goals_categories">
				<div className="goals__title">
					Categories
				</div>
				<div className="goals__slider">
					<AliceCarousel 
						disableDotsControls={true}
						disableButtonsControls={true}
						infinite={true}
						mouseTracking={true}
						responsive={responsive}
						swipeDisabled={true}
					>
						{categories.map((categories) => 

							<div 
								key = {categories.id} 
								className="goals__slider-item" 
								// style={{background: `hsl(${categories.id * 75}, 60%, 60%)` }}
								style={{background: `linear-gradient(180deg, hsl(${categories.id*80}, 92%, 77%) 0%, hsl(233, 82%, 62%) 100%)`}}
								onDoubleClick = { filterCategories }
							>
								<div className="goals__slider-icon">
									<img  src={categories.image} alt={categories.title}/>
								</div>
							
								<div className="goals__slider-title">
									{categories.title}
								</div>
							
							</div>
						)}
					</AliceCarousel>
				</div>
			</div>
			
			<div className="goals__title">
				Сейчас ищут
			</div>

			<div className="goals__layout">
				{newGoals.map((goals, index) =>
					<div key={index} className="goals_grid">
						{goals.map((goals) =>
							
							<div
								className = 'item_grid' 
								style = {{backgroundImage: goals.bg_image }}
								key={ goals.id }
								onClick = { () => navigate(`/goal/${goals.id}`)}
							>
								
								<div className="goals_goals__circle">
									<img className="goals_goals__icon" src={goals.image} alt={goals.title}/>
								</div>
								<div className="goals_goals__text">
									<div className="goals_goals__title">{goals.title}</div>
									<div className="goals_goals__subtitle">{goals.description}</div>
								</div>
						
							</div>
						)}

					</div>
					
				)}
			</div>
		
		</div>
	);
}

export default GoalCatalog;
