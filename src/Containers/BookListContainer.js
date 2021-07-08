import React from 'react'
import BookThumbCard from '../components/BookThumbCard'
import { connect } from 'react-redux'

const BookListContainer = props => {
	console.log('book container', props.queryResults)

	const renderResults = () => {
		return props.queryResults.map(result => (
			<BookThumbCard
				key={result.id}
				title={result.volumeInfo ? result.volumeInfo.title : 'no title'}
				author={result.volumeInfo ? result.volumeInfo.authors[0] : 'no author'}
				img={
					result.volumeInfo
						? result.volumeInfo.imageLinks.smallThumbnail
						: 'no link'
				}
			/>
		))
	}

	return <div className='book-container'>{renderResults()}</div>
}

const mapStateToProps = state => ({
	queryResults: state.searchReducer.queryResults,
})

export default connect(mapStateToProps)(BookListContainer)
