import './App.css'
import React, { useState, useEffect } from 'react'
import HomeContainer from './containers/HomeContainer'
import NavBar from './components/shared/NavBar.js'
import SearchContainer from './containers/SearchContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookListContainer from './containers/BookListContainer'

function App() {
	const [dark, setState] = useState(false)
	const changeMode = () => setState(dark ? false : false)

	return (
		<div className='App' data-theme={dark ? 'dark' : 'light'}>
			<Router>
				<NavBar />
				<SearchContainer />
				<Switch>
					<Route exact path='/'>
						<HomeContainer dark={dark} changeMode={changeMode} />
					</Route>
					<Route path='/books'>
						<BookListContainer />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
