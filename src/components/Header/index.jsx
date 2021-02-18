import './Header.scss';
import React from 'react';
import { Link } from '@reach/router';

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