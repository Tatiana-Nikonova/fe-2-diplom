import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrainSelection from "./pages/TrainSelection";


import './css/style.css';



function App() {
	return (		
		<Router>
			<Routes>
				<Route exact path="./pages/HomePage" component={HomePage} />
				<Route exact path="/TrainSelection" component={TrainSelection} />
			</Routes>
		</Router>
	

	)
}

export default App;
