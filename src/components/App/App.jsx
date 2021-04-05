import React from 'react';
import Auth from '../Auth';
import {  Router } from '@reach/router';
import './App.scss';
import '../page/page.scss';
import Page from '../page/page';

function App() {
	return (
		<div className="App">
			<Router>
				<Auth path="/auth/*" />
				<Page path="/*" />
			</Router>
		</div>

	);
}

export default App;
