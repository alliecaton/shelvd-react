import React, { useState } from 'react'
import BookListContainer from '../containers/BookListContainer'
import { useHistory } from 'react-router-dom'

const Searchbar = () => {
	let history = useHistory()
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
		history.push('/books')
	}

	return (
		<>
			<form className='searchbar' onSubmit={e => handleSubmit(e)}>
				<input type='text' onChange={e => handleInput(e)} value={state.query} />
				<input type='submit' value='Submit' />
			</form>
		</>
	)
}

export default Searchbar
