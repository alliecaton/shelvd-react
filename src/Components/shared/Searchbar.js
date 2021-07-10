import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchResults } from '../../actions/searchActions'

const Searchbar = props => {
	let history = useHistory()
	const [query, setQuery] = useState('')

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
				<input
					type='text'
					onChange={e => setQuery(e.target.value)}
					value={query}
				/>

				<input type='submit' value='Submit' />
			</form>
		</>
	)
}

const mapDispatchToProps = dispatch => ({
	fetchResults: query => dispatch(fetchResults(query)),
})

export default connect(null, mapDispatchToProps)(Searchbar)
