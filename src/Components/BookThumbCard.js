import React from 'react'

const BookThumbCard = props => {
	console.log(props)
	return (
		<div>
			<ul>
				<li>{props.title}</li>
			</ul>
		</div>
	)
}

export default BookThumbCard
