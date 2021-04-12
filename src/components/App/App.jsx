import React from 'react';
//import Auth from '../Auth';
import { Router  } from '@reach/router';
import './App.scss';
import '../page/page.scss';
import Page from '../page/page';
import Auth from './../Auth/index';


function App() {
	// const token = localStorage.token;

	// if (!token) {
	// 	< Redirect from="/:id/*" to="/auth/*"/>;
	// }
	
	return (
		<div className="App">
			<Router>
				<Page path="/:id/*" />
				<Auth path="/auth/*" />
			</Router>
		</div>
	);
}

export default App;
