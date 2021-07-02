import './App.css';
import React, { useState } from 'react';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar.js';
import Searchbar from './containers/Searchbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookListContainer from './containers/BookListContainer';

function App() {
	const [mode] = useState('light');

	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Searchbar />
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
