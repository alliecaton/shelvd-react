import React from 'react';
import image from '../images/book.png';
import Search from './Searchbar';

const NavBar = () => {
	return (
		<div>
			<ul>
				<li>
					<img className='logo-img' src={image} alt='book logo' />
					<h2 className='logo-text'>Shelvd</h2>
				</li>
				<li className='navbar'>
					<a href='google.com'>link</a>
				</li>
				<li className='navbar'>
					<a href='google.com'>link</a>
				</li>
				<li>
					<Search />
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
