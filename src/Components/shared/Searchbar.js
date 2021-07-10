import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchResults } from '../../actions/searchActions'
import { Link } from 'react-router-dom'

const Searchbar = props => {
	let history = useHistory()
	const [query, setQuery] = useState('')

	const handleInput = e => {
		setQuery(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		history.push(`/results/${query}`)
		props.fetchResults(query)
		setQuery('')
		console.log('state', query)
	}

	return (
		<>
			<form className='searchbar' onSubmit={e => handleSubmit(e)}>
				<input type='text' onChange={e => handleInput(e)} value={query} />
				{/* <Link to={`/results/${query}`}> */}
				<input type='submit' value='Submit' />
				{/* </Link> */}
			</form>
		</>
	)
}

const mapDispatchToProps = dispatch => ({
	fetchResults: query => dispatch(fetchResults(query)),
})

export default connect(null, mapDispatchToProps)(Searchbar)
