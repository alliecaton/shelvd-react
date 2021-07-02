import React from 'react';

const Button = ({ text, onClick }) => {
	return (
		<>
			<button onClick={onClick} className='light'>
				{text}
			</button>
		</>
	);
};

export default Button;
