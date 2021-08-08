import React from 'react';
import './Menu.scss';
import { navigate } from '@reach/router';

function Menu() {

	return (
		<div className="left-menu left-menu-hover">
			{/* схлопнутое меню */}
			<div className="mini-menu">
				{/* первая строчка */}
				<div className="icon">
					<img src="/images/icon.svg" alt="icon"></img>
				</div>
				<div className="GoalMenu" onClick = { () => navigate(`/`) }>
					<img src="/images/GoalMenu.png" alt="GoalMenu" />
				</div>
				{/* вторая строчка */}
				<div onClick = { () => navigate(`/goal/categories/`) } className="item__wrap">
					<div className="catalog">
						<img src="/images/catalog.png" alt="catalog"></img>
					</div>
					<div className="menu-text catalog-text">Catalog</div>
				</div>
				
				{/* третья строчка */}
				<div onClick = { () => navigate(`/goal/my-parties/`) } className="item__wrap">
					<div className="myParties ">
						<img src="/images/myParties.png" alt="myParties"></img>
					</div>
					<div className="menu-text parties-text">My parties</div>
				</div>
				
			</div>
		</div>
	);
}

export default Menu;
