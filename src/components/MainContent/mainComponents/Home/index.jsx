// import './MainContent.scss';
// import { render } from '@testing-library/react';
import React, {useState} from 'react';
import './Home.scss';

function Home() {
	const [count, setCount] = useState(0);
	return (
		<div className="home">
			<div>
					Home
			</div>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)} className="counter">+</button>
			<button onClick={() => setCount(count -1)} className="counter">-</button>
		</div>
	);
}

export default Home;