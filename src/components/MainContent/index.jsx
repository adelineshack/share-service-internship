import './MainContent.scss';
import React from 'react';
import Home from './mainComponents/Home';
import { Router } from '@reach/router';
import Profile from './mainComponents/Profile';
import Dashboard from './mainComponents/Dashboard';


function MainContent() {
	return (
		<div className="main-content">
			<Router>
				<Home path="/" />
				<Profile path="/profile" />
				<Dashboard path="/dashboard" />
			</Router>
		</div>
	);
}

export default MainContent;