import React, { useState } from 'react';
import Button from './Button';

const RandomBook = () => {
	const [bookData, setState] = useState({
		volumeInfo: {
			title: 'default title',
		},
	});

	// const fetchBook = () => {
	// 	fetch(
	// 		'https://www.googleapis.com/books/v1/volumes?q=fiction+subject&printType=books&orderBy=relevance'
	// 	)
	// 		.then(resp => resp.json())
	// 		.then(json => {
	// 			let num = Math.floor(Math.random() * (json.items.length - 1 + 1) + 1);
	// 			let index = Math.floor(
	// 				Math.random() * (json.totalItems / 10 - 1 + 1) + 1
	// 			);
	// 			fetch(
	// 				`https://www.googleapis.com/books/v1/volumes?q=fiction+subject&startIndex=${index}&maxResults=10`
	// 			)
	// 				.then(resp => resp.json())
	// 				.then(json => {
	// 					setState(json.items[num]);
	// 				});
	// 		});
	// };

	console.log('state', bookData);
	return (
		<>
			<div className='book-card'>{bookData.volumeInfo.title}</div>
			<Button text={'Get Random Book!!'} />
		</>
	);
};

export default RandomBook;
