import React from 'react'
import image from '../../images/book.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<div>
			<ul>
				<li>
					<img className='logo-img' src={image} alt='book logo' />
					<h2 className='logo-text'>Shelvd</h2>
				</li>
				<Link to='/'>
					<li className='navbar'>Home</li>
				</Link>
				<Link to='/books'>
					<li className='navbar'>Books</li>
				</Link>
				<li></li>
			</ul>
		</div>
	)
}

export default NavBar