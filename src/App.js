import React from 'react';
import './css/style.css';
import './css/header.css';
import './css/reviews.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';

import tv from './img/tv.png';
import home from './img/home.png';
import earth from './img/earth.png';
import Reviews from './components/Reviews';


function App() {
	return (
		<div className="wrapper">
			<div className="App">
				<Header />
				<Nav />
				<About />

				<section className='how-working'>
					<div className='how-working__container'>
						<h2 className='how-working__title titleh2'>Как это работает</h2>
						<button className='how-working__button'>Узнать больше</button>
						<div className='how-working__content'>
							<div className='how-working__card'>
								<div className='how-working__card-img'>
									<img src={tv}></img>
								</div>
								<div className='how-working__card-text'>Удобный заказ <br /> на сайте</div>
							</div>
							<div className='how-working__card'>
								<div className='how-working__card-img'>
									<img src={home}></img>
								</div>
								<div className='how-working__card-text'>Нет необходимости <br /> ехать в офис</div>
							</div>
							<div className='how-working__card'>
								<div className='how-working__card-img'>
									<img src={earth}></img>
								</div>
								<div className='how-working__card-text'>Огромный выбор <br />направлений</div>
							</div>
						</div>
					</div>
				</section>

				<Reviews />
			</div >
		</div >

	);
}

export default App;
