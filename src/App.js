import './App.css';
import React, { useState } from 'react';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar.js';
import SearchContainer from './containers/SearchContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookListContainer from './containers/BookListContainer';

function App() {
	const [mode] = useState('light');

	return (
		<div className='App'>
			<Router>
				<NavBar />
				<SearchContainer />
				<Switch>
					<Route exact path='/'>
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
