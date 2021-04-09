import React, {useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import './GoalsCatalog.scss';
import { useDispatch, useSelector} from "react-redux";
import { getGoalsCategories, getGoals, filterGoals } from './../../../store/actions/index';
import { navigate } from '@reach/router';



function GoalCatalog() {

	
	const dispatch = useDispatch();
	

	useEffect(() => {
		
		dispatch(getGoalsCategories());
		dispatch(getGoals());

	}, []);


	//Получение данных из стора
	const categories = useSelector(state => state.goals.categories);
	let goals = useSelector(state => state.goals.goals);
	let categoryId = useSelector(state => state.goals.filteredCategoryId);
	console.log(categoryId);

	
	
	// Отобажение бэкграунда
	goals.map( item => item.bg_image = `url(${item.bg_image})`);

	let filteredGoal = goals.filter(obj => {
		if ( categoryId === null ) {
			console.log("работает");
			
			return true;

		}  else if (obj.category.id === categoryId)  {
			console.log("работает2");
			console.log(obj);
			return true;
		}	else return false;
		
	});
	console.log(filteredGoal);


	//Разделение на подмассивы
	let newGoals = [];
	const length = 6;
	for (let i = 0; i < filteredGoal.length; i += length) {
		newGoals.push(filteredGoal.slice(i, i + length));
	}

	
	//Добавление пустых полей
	newGoals.map(obj => {
		if ( filteredGoal.length > 3 && filteredGoal.length <  5 ) {
			obj.splice(3, 0, {category: { id: 999}});
			
		} else if ( filteredGoal.length >  5 ) {
			obj.splice(3, 0, {category: { id: 'default'}});
			obj.splice(6, 0, {category: { id: 'default'}});
		}
	
	});



	//Для работы в консоле
	window.newGoals = newGoals;
	window.goals = goals;
	window.categories = categories;

	function filterCategories(categories) {
		
		dispatch(filterGoals(categories.id));
		dispatch(getGoals());
		console.log(categoryId);
	}
	

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

	console.log(goals);
	console.log(newGoals);

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
								onDoubleClick = {() => filterCategories(categories) }
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
				{newGoals.map((section, index) =>
					<div key={index} className="goals_grid">
						{ 
							section.map((goals) =>
							
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
