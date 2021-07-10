import React from 'react'
import BookThumbCard from '../components/BookThumbCard'
import { connect } from 'react-redux'
import Loading from '../components/shared/Loading'

const BookListContainer = props => {
	console.log('rendered')

	const renderResults = () => {
		if (props.loading) {
			return <Loading />
		} else {
			return props.queryResults.map(result => (
				<BookThumbCard
					key={result.id}
					title={result.volumeInfo.title ? result.volumeInfo.title : 'no title'}
					author={
						result.volumeInfo.authors ? result.volumeInfo.authors[0] : ' '
					}
					img={
						result.volumeInfo.imageLinks
							? result.volumeInfo.imageLinks.smallThumbnail
							: 'no image'
					}
					isbn={
						result.volumeInfo.industryIdentifiers
							? result.volumeInfo.industryIdentifiers[0].identifier
							: 'no identifier'
					}
				/>
			))
		}
	}

	return <div className='book-container'>{renderResults()}</div>
}

const mapStateToProps = state => ({
	queryResults: state.searchReducer.queryResults,
	loading: state.searchReducer.loading,
})

export default connect(mapStateToProps)(BookListContainer)
