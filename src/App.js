import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Route exact path='/' component={HomePage} />
			</BrowserRouter>
		</div>
	);
}

export default App;
