import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchShow } from '../actions/searchActions'

const BookContainer = props => {
	const [book, setState] = useState({
		title: '',
		authors: '',
		description: '',
		img: '',
		isbn: props.match.params.isbn,
	})

	useEffect(() => {
		props.fetchShow(book.isbn)
		setState(prevState => ({
			...prevState,
			book: '',
		}))
	}, [props, book.isbn])

	console.log(book)
	return <div>book</div>
}

const mapDispatchToProps = dispatch => ({
	fetchShow: isbn => dispatch(fetchShow(isbn)),
})

const mapStateToProps = state => ({
	results: state.searchReducer.queryResults,
	loading: state.searchReducer.loading,
})

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)
