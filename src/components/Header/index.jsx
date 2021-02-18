import './Header.scss';
import React from 'react';
import { Link } from '@reach/router';
// import Home from '../MainContent/mainComponents/Home';
// import Profile from '../MainContent/mainComponents/Profile';
// import Dashboard from '../MainContent/mainComponents/Dashboard';

function Header() {
	return (
		<div className="header">
			<Link to='/'>Home</Link>
			<Link to='/profile'>Profile</Link>
			<Link to='/dashboard'>Dashboard</Link>
		</div>
	);
}

export default Header;