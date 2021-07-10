import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BookShowCard from '../components/BookShowCard'

const BookContainer = props => {
	const [book, setState] = useState({
		title: '',
		authors: '',
		description: '',
		img: '',
		isbn: props.match.params.isbn,
	})

	useEffect(() => {
		fetch(`http://localhost:3001/books/${book.isbn}`)
			.then(r => r.json())
			.then(json => {
				const data = { isbn: book.isbn, json: json.results }
				console.log('this is the data', data)
				console.log(data.json.items[0].volumeInfo.title)
				setState(prevState => ({
					...prevState,
					title: data.json.items[0].volumeInfo.title,
					authors: data.json.items[0].volumeInfo.authors[0],
					description: data.json.items[0].volumeInfo.description,
					img: data.json.items[0].volumeInfo.imageLinks.thumbnail,
				}))
				console.log(data)
			})
	}, [])

	return (
		<div>
			<BookShowCard
				title={book.title}
				author={book.authors}
				description={book.description}
				img={book.img}
			/>
		</div>
	)
}

const mapStateToProps = state => ({
	results: state.searchReducer.queryResults,
	loading: state.searchReducer.loading,
	bookObject: state.searchReducer.queryResults[0],
})

export default connect(mapStateToProps)(BookContainer)
