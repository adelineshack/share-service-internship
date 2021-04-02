import './App.scss';
import React from 'react';
import Auth from '../Auth';




function App() {
	// axios.get('https://share-service.mircod.one/api/goal/categories/')
	// 	.then(function (response) {
	// 		console.log(response);
	// 	})
	// 	.catch(function (error) {
	// 		console.log(error);
	// 	});
	return (
		<div className="App">
			<Auth />
		</div>

	);
}

export default App;
