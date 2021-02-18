import './Header.scss';
import React from 'react';
import { Link } from '@reach/router';
// import Home from '../MainContent/mainComponents/Home';
// import Profile from '../MainContent/mainComponents/Profile';
// import Dashboard from '../MainContent/mainComponents/Dashboard';

function Header() {
	return (
		<div className="header">
			<a><Link to='/'>Home</Link></a>
			<a><Link to='/profile'>Profile</Link></a>
			<a><Link to='/dashboard'>Dashboard</Link></a>
			
		</div>
	);
}

export default Header;