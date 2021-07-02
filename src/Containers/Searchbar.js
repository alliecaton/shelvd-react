import React, { useState } from 'react';
import BookListContainer from './BookListContainer';
import { Link } from 'react-router-dom';

const Searchbar = () => {
	const [state, setState] = useState({
		query: '',
		queryResults: [],
	});

	const handleInput = e => {
		setState(prevState => ({
			...prevState,
			query: e.target.value,
		}));
		console.log(state.query);
	};

	const handleSubmit = e => {
		e.preventDefault();
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${state.query}+inTitle&printType=books&orderBy=relevance`
		)
			.then(resp => resp.json())
			.then(json => {
				setState(prevState => ({
					...prevState,
					queryResults: json.items,
				}));
				renderBooks();
			});
	};

	const renderBooks = () => {
		console.log('hit');
		return (
			<div>
				<Link to='/books'>
					<BookListContainer
						queryResults={state.queryReults}
						query={state.query}
					/>
				</Link>
			</div>
		);
	};

	return (
		<>
			<form className='searchbar'>
				<input type='text' onChange={e => handleInput(e)} value={state.query} />
				<input type='submit' value='Submit' onClick={e => handleSubmit(e)} />
				{renderBooks}
			</form>
		</>
	);
};

export default Searchbar;
