import React from 'react'
import { Link } from 'react-router-dom'

const BookThumbCard = props => {
	console.log(props)
	return (
		<div>
			<Link to={`/books/${props.isbn}`}>
				<ul>
					<li>
						<div className='book-thumb'>
							<h3>{props.title}</h3>
							<p>{props.author}</p>
							<img
								className='image-thumbnail'
								alt={`${props.title}`}
								src={props.img}
							/>
						</div>
					</li>
					<li></li>
				</ul>
			</Link>
		</div>
	)
}

export default BookThumbCard
