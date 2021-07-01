import React, { useState } from 'react';

const Searchbar = () => {
	const [query, setState] = useState('');

	const handleInput = e => {
		setState(e.target.value);
		console.log(query);
	};

	const handleSubmit = e => {
		e.preventDefault();
		fetch(
			'https://www.googleapis.com/books/v1/volumes?q=${query}+inTitle&printType=books&orderBy=relevance'
		)
			.then(resp => resp.json())
			.then(json => {
				console.log(json);
			});
	};

	return (
		<>
			<form className='searchbar'>
				<input type='text' onChange={e => handleInput(e)} value={query} />
				<input type='submit' value='Submit' onClick={e => handleSubmit(e)} />
			</form>
		</>
	);
};

export default Searchbar;
