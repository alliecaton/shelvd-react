import React from 'react'
import image from '../../images/book.png'
import { Link } from 'react-router-dom'
import SearchContainer from '../../containers/SearchContainer'

const NavBar = () => {
	return (
		<div className='navbar-parent'>
			<ul>
				<li>
					{/* <img className='logo-img' src={image} alt='book logo' /> */}
					<h2 className='logo-text'>Shelvd</h2>
				</li>
				<Link to='/books'>
					<li className='navbar'>Books</li>
				</Link>
				<Link to='/'>
					<li className='navbar'>Home</li>
				</Link>
				<li className='navbar'>
					<SearchContainer />
				</li>
			</ul>
		</div>
	)
}

export default NavBar
