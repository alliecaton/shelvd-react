import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import { fetchShow } from '../actions/searchActions'

const BookContainer = props => {
	// console.log(props.bookObject, 'from store')
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
				console.log('this is the data', data)
				console.log(data.json.items[0].volumeInfo.title)
				setState(prevState => ({
					...prevState,
					title: data.json.items[0].volumeInfo.title,
					authors: data.json.items[0].volumeInfo.authors,
					description: data.json.items[0].volumeInfo.description,
					img: data.json.items[0].volumeInfo.imageLinks.smallThumbnail,
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
