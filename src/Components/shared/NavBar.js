import React from 'react'
import { Link } from 'react-router-dom'
import SearchContainer from '../../containers/SearchContainer'

const NavBar = () => {
	return (
		<div className='navbar-parent'>
			<ul>
				<li>
					{/* <img className='logo-img' src={image} alt='book logo' /> */}
					<Link to='/'>
						<h2 className='logo-text'>Shelvd</h2>
					</Link>
				</li>
				<Link to='/signup'>
					<li className='navbar'>Sign Up</li>
				</Link>
				<Link to='/Login'>
					<li className='navbar'>Login</li>
				</Link>
				<li className='navbar'>
					<SearchContainer />
				</li>
			</ul>
		</div>
	)
}

export default NavBar
