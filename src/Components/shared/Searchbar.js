import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchResults } from '../../actions/searchActions'
import { Link } from 'react-router-dom'

const Searchbar = props => {
	const [query, setQuery] = useState('')

	return (
		<>
			<form className='searchbar'>
				<input
					type='text'
					onChange={e => setQuery(e.target.value)}
					value={query}
				/>
				<Link to={`/results/${query}`}>
					<input type='submit' value='Submit' />
				</Link>
			</form>
		</>
	)
}

const mapDispatchToProps = dispatch => ({
	fetchResults: query => dispatch(fetchResults(query)),
})

export default connect(null, mapDispatchToProps)(Searchbar)
