import './App.css';
import React, { useState } from 'react';
import HomeContainer from './Containers/HomeContainer';
import NavBar from './Components/NavBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookListContainer from './Containers/BookListContainer';

function App() {
	const [mode] = useState('light');

	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Switch>
					<Route path='/'>
						<HomeContainer mode={mode} />
					</Route>
					<Route path='/books'>
						<BookListContainer />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
