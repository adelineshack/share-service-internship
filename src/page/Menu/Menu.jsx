import React from 'react';
import './Menu.scss';

function Menu() {
	return (
		<div className="left-menu left-menu-hover">
			{/* схлопнутое меню */}
			<div className="mini-menu">
				{/* первая строчка */}
				<div className="icon">
					<img src="images/icon.svg" alt="icon"></img>
				</div>
				<div className="GoalMenu">
					<img src="/images/GoalMenu.png" alt="GoalMenu" />
				</div>
				{/* вторая строчка */}
				<div className="catalog">
					<img src="/images/catalog.png" alt="catalog"></img>
				</div>
				<div className="menu-text catalog-text">Catalog</div>
				{/* третья строчка */}
				<div className="myParties ">
					<img src="/images/myParties.png" alt="myParties"></img>
				</div>
				<div className="menu-text parties-text">My parties</div>
			</div>
		</div>
	);
}

export default Menu;
