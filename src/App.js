// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './components/Header/index.jsx';
import MainContent from './components/MainContent/index.jsx';
import Footer from './components/Footer/index.jsx';


function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="app__wrapper">
					<Header /> 
					<MainContent />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
