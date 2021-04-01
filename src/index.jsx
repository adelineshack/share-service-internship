import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';
import { Provider } from 'react-redux';
import store from './components/page/indexReducers.jsx';
//import Page from './components/Page';
//import page from './components/App/page';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
