import React from 'react';
import { Link } from 'react-router-dom';

const navbarData = [
	{
		url: '/',
		title: 'Characters',
		icon: '',
	},
	{
		url: '/movies',
		title: 'Movies',
		icon: '',
	},
	{
		url: '/starships',
		title: 'Starchips',
		icon: '',
	},
	{
		url: '/vehicles',
		title: 'Vehicles',
		icon: '',
	},
];
const Navbar = () => {
	return (
		<div className='flex items-center justify-between py-5 px-10'>
			<img
				className='h-20'
				src='https://kameikay-starwars.netlify.app/images/logo.svg'
			/>
			<div>
				{navbarData.map((item, index) => (
					<Link
						key={index}
						className='ml-10 hover:text-yellow-500 delay-300'
						to={item.url}
					>
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navbar;
