import React from 'react'

const BookThumbCard = props => {
	console.log(props)
	return (
		<div>
			<ul>
				<li>
					<div className='book-thumb'>
						<h3>{props.title}</h3>
						<p>{props.author}</p>
						<img src={props.img} />
					</div>
				</li>
				<li></li>
			</ul>
		</div>
	)
}

export default BookThumbCard
