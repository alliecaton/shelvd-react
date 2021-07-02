import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchResults } from '../actions/searchActions'

const Searchbar = props => {
	let history = useHistory()
	const [state, setState] = useState({
		query: '',
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
		props.fetchResults(state.query)
		setState(prevState => ({
			...prevState,
			query: '',
		}))
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

const mapDispatchToProps = dispatch => ({
	fetchResults: query => dispatch(fetchResults(query)),
})

export default connect(null, mapDispatchToProps)(Searchbar)
