import React, { useState } from 'react'
import Button from './shared/Button'

const RandomBook = () => {
	const [bookData] = useState({
		volumeInfo: {
			title: 'default title',
		},
	})

	return (
		<>
			<div className='book-card'>{bookData.volumeInfo.title}</div>
			<Button text={'Get Random Book!!'} />
		</>
	)
}

export default RandomBook
