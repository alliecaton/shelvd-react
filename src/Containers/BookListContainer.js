import React, { useEffect } from 'react'
import BookThumbCard from '../components/BookThumbCard'
import { connect } from 'react-redux'

const BookListContainer = props => {
	// const queryResults = useSelector(state => state.queryResults)

	console.log('book container', props.queryResults)
	return (
		<div>
			<BookThumbCard />
			<BookThumbCard />
			<BookThumbCard />
			<BookThumbCard />
		</div>
	)
}

const mapStateToProps = state => ({
	queryResults: state.searchReducer.queryResults,
})

export default connect(mapStateToProps)(BookListContainer)
