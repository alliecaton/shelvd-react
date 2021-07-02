import React, { useState } from 'react';

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
			});
	};
	console.log(state);
	return (
		<>
			<form className='searchbar'>
				<input type='text' onChange={e => handleInput(e)} value={state.query} />
				<input type='submit' value='Submit' onClick={e => handleSubmit(e)} />
			</form>
		</>
	);
};

export default Searchbar;
