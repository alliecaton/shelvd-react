import React, { useState } from 'react';
import Button from './Button';

const RandomBook = () => {
	const [bookData, setState] = useState({
		volumeInfo: {
			title: 'default title',
		},
	});

	const fetchBook = () => {
		fetch(
			'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=1Wdgde9tUVE2oGAgQdRsaQkBi4SXqPF3'
		)
			.then(resp => resp.json())
			.then(json => {
				console.log(json);
				// let num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
				// let index = Math.floor(
				// 	Math.random() * (json.totalItems / 10 - 1 + 1) + 1
				// );
			});
	};

	console.log('state', bookData);
	return (
		<>
			<div className='book-card'>{bookData.volumeInfo.title}</div>
			<Button text={'Get Random Book!!'} onClick={fetchBook} />
		</>
	);
};

export default RandomBook;
