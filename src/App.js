import React from 'react';
import './css/style.css';
import './css/header.css';
import './css/reviews.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import HowWorking from './components/HowWorking';
import Reviews from './components/Reviews';


function App() {
	return (
		<div className="wrapper">
			<div className="App">
				<Header />
				<Nav />
				<About />

				<HowWorking />

				<Reviews />
			</div >
		</div >

	);
}

export default App;
