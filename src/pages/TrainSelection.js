import React from 'react';
import '../css/style.css';
import Header1 from '../components/Header1';
import Nav from '../components/Nav';
import Pagination123 from '../components/Pagination123';
import Footer from '../components/Footer';


function TrainSelection() {
	return (
		<div className="wrapper">
			<div className="home-page">
				<Header1 />
				<Nav />				
				<Pagination123 />
				<Footer />
			</div >
		</div >

	);
}

export default TrainSelection;