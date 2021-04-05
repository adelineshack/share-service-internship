import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import './GoalsCatalog.scss';
// import StackGrid from "react-stack-grid";



function GoalCatalog() {

	const categories = [
		{ id:1, title: 'Кино и сериалы', icon: '/icon/categories/popcorn.svg', bg: 'linear-gradient(180deg, #8D98FA 0%, #5063EE 100%)' },
		{ id:2, title: 'Музыка', icon: '/icon/categories/headphones.png', bg: 'linear-gradient(180deg, #3DCCFC 0%, #0C637F 100%)' },
		{ id:3, title: 'Облачные сервисы', icon: '/icon/categories/cloud.png', bg: 'linear-gradient(180deg, #FFD166 0%, #83D483 100%)' },
		{ id:4, title: 'Покупки', icon: '/icon/categories/cart.png', bg: 'linear-gradient(180deg, #EF476F 0%, #F78C6B 100%)' },
		
	];

	const goals = [
		{ className: 'goals_goals-horiz', id:1, title: 'Spotify', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/spotify.svg', bg: 'url(/images/goals/bg_spotify.jpg)'},
		{ className: 'goals_goals-vertic', id:2, title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
		{ className: 'goals_goals-horiz', id:3, title: 'Yandex Plus', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/yandex.svg', bg: 'url(/images/goals/bg_yandex.jpg)'},
		{ id: 4 },
		{ className: 'goals_goals-vertic', id:5, title: 'Youtube Premium', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/youtube.svg', bg: 'url(/images/goals/bg_youtube.jpg)'},
		{ className: 'goals_goals-horiz', id:6, title: 'Apple', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/apple.svg', bg: 'url(/images/goals/bg_apple.jpg)'},
		{ id: 7 },
		{ className: 'goals_goals-vertic', id:8, title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
		{ className: 'goals_goals-horiz', id:9, title: 'Spotify', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/spotify.svg', bg: 'url(/images/goals/bg_spotify.jpg)'},
		{ className: 'goals_goals-vertic', id:10, title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
		{ className: 'goals_goals-horiz', id:11, title: 'Yandex Plus', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/yandex.svg', bg: 'url(/images/goals/bg_yandex.jpg)'},
		{ id: 12 },
		{ className: 'goals_goals-vertic', id:13, title: 'Youtube Premium', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/youtube.svg', bg: 'url(/images/goals/bg_youtube.jpg)'},
		{ className: 'goals_goals-horiz', id:14, title: 'Apple', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/apple.svg', bg: 'url(/images/goals/bg_apple.jpg)'},
		{ id: 15 },
		{ className: 'goals_goals-vertic', id:16, title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
		{ className: 'goals_goals-horiz', id:17, title: 'Spotify', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/spotify.svg', bg: 'url(/images/goals/bg_spotify.jpg)'},
		{ className: 'goals_goals-vertic', id:18, title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
		{ className: 'goals_goals-horiz', id:19, title: 'Yandex Plus', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/yandex.svg', bg: 'url(/images/goals/bg_yandex.jpg)'},
		{ id: 20 },
		{ className: 'goals_goals-vertic', id:21, title: 'Youtube Premium', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/youtube.svg', bg: 'url(/images/goals/bg_youtube.jpg)'},
		{ className: 'goals_goals-horiz', id:22, title: 'Apple', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/apple.svg', bg: 'url(/images/goals/bg_apple.jpg)'},
		{ id: 23 },
		{ className: 'goals_goals-vertic', id:24, title: 'Netflix', subtitle: 'Музыкальный сервис для прослушивания музыки', icon: '/icon/goals/netflix.svg', bg: 'url(/images/goals/bg_netflix.jpg)'},
		
	];

	
	const goalsCopy = JSON.parse(JSON.stringify(goals));
	const newGoals = [], length = 8; // Объявляем переменные
	while(goalsCopy.length) newGoals.push(goalsCopy.splice(0,length)); // Разбираем массив
	console.log(newGoals);
	console.log(goals);
	window.newGoals = newGoals;

	

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

							<div key = {categories.id} className="goals__slider-item" style={{background: categories.bg }}>
								<div className="goals__slider-icon">
									<img  src={categories.icon} alt={categories.title}/>
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
					<div key={index} className="example_grid">
						{goals.map((goals) =>
						
							<div
								className='item_grid' 
								style={{backgroundImage: goals.bg }}
								key={goals.id}
							>

								<div className="goals_goals__circle">
									<img className="goals_goals__icon"src={goals.icon} alt={goals.title}/>
								</div>
								<div className="goals_goals__text">
									<div className="goals_goals__title">{goals.title}</div>
									<div className="goals_goals__subtitle">{goals.subtitle}</div>
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
