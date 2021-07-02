import React from 'react'
import BookThumbCard from '../components/BookThumbCard'
import { connect } from 'react-redux'

const BookListContainer = props => {
	console.log('book container', props.queryResults)

	const renderResults = () => {
		return props.queryResults.map(result => (
			<BookThumbCard key={result.id} title={result.volumeInfo.title} />
		))
	}

	return <div>{renderResults()}</div>
}

const mapStateToProps = state => ({
	queryResults: state.searchReducer.queryResults,
})

export default connect(mapStateToProps)(BookListContainer)
