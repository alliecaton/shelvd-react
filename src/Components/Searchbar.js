import React, { useState } from 'react'
import BookListContainer from '../containers/BookListContainer'
import { Link } from 'react-router-dom'

const Searchbar = () => {
	const [state, setState] = useState({
		query: '',
		queryResults: [],
	})

	const handleInput = e => {
		setState(prevState => ({
			...prevState,
			query: e.target.value,
		}))
		console.log(state.query)
	}

	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<div>
			<form className='searchbar'>
				<input type='text' onChange={e => handleInput(e)} value={state.query} />
				<Link to='/books'>
					<input type='submit' value='Submit' onClick={e => handleSubmit(e)} />
				</Link>
			</form>
		</div>
	)
}

export default Searchbar
