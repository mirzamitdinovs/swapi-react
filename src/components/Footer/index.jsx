import React from 'react';

const Footer = () => {
	return (
		<p className='p-5 text-center'>
			Developed by{' '}
			<a
				target={'_blank'}
				className='text-orange-500 mx-2'
				href='https://github.com/mirzamitdinovs'
			>
				Sayyod Mirzamitdinov.
			</a>
			All data was taken from
			<a
				target='_blank'
				className='text-orange-500 mx-2'
				href='https://swapi.dev/'
			>
				SWAPI
			</a>
		</p>
	);
};

export default Footer;
