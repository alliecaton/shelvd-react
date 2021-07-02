import React from 'react'
import RandomBook from '../components/RandomBook'

const HomeContainer = ({ light, changeMode }) => {
	return (
		<div className='home-container'>
			<button onClick={changeMode}>dark mode</button>
			<RandomBook />
		</div>
	)
}

export default HomeContainer
