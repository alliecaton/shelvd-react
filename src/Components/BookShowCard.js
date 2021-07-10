import React from 'react'

const BookShowCard = props => {
	return (
		<div className='book-show-card'>
			<div className='book-info'>
				<h2>{props.title}</h2>
				<h5>{props.author}</h5>
			</div>
			<div className='flex-box-parent'>
				<div className='book-show-containers'>
					<img className='image-thumbnail' src={props.img} alt='book cover' />
				</div>
				<div className='book-description'>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	)
}

export default BookShowCard
