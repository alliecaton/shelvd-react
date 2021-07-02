import './App.css'
import React, { useState } from 'react'
import HomeContainer from './containers/HomeContainer'
import NavBar from './components/shared/NavBar.js'
import SearchContainer from './containers/SearchContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookListContainer from './containers/BookListContainer'

function App() {
	const [light, setState] = useState(true)

	const changeMode = () => {
		setState(prevState => ({
			light: !prevState.light,
		}))
	}

	console.log(light)
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<SearchContainer />
				<Switch>
					<Route exact path='/'>
						<HomeContainer light={light} changeMode={changeMode} />
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
