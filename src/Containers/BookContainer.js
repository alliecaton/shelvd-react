import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import { fetchShow } from '../actions/searchActions'

const BookContainer = props => {
	console.log(props.bookObject, 'from store')
	const [book, setState] = useState({
		title: '',
		authors: '',
		description: '',
		img: '',
		isbn: props.match.params.isbn,
	})

	useEffect(() => {
		// props.fetchShow(book.isbn)
		fetch(`http://localhost:3001/books/${book.isbn}`)
			.then(r => r.json())
			.then(json => {
				const data = { isbn: book.isbn, json: json.results }
				console.log(data)
				setState(prevState => ({
					...prevState,
					title: props.bookObject.volumeInfo.title,
					authors: props.bookObject.volumeInfo.authors,
					description: props.bookObject.volumeInfo.description,
					img: props.bookObject.volumeInfo.imageLinks.smallThumbnail,
				}))
				console.log(data)
			})
	}, [])

	return (
		<div>
			<div>
				<h2>{book.title}</h2>
				<h5>{book.authors[0]}</h5>
				<p>{book.description}</p>
				<img src={book.img} alt='book cover' />
			</div>
		</div>
	)
}

// const mapDispatchToProps = dispatch => ({
// 	fetchShow: isbn => dispatch(fetchShow(isbn)),
// })

const mapStateToProps = state => ({
	results: state.searchReducer.queryResults,
	loading: state.searchReducer.loading,
	bookObject: state.searchReducer.queryResults[0],
})

export default connect(mapStateToProps)(BookContainer)
