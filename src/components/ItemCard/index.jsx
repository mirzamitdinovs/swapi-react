import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ image, title, link, toggleFav }) => {
	return (
		<div className='relative rounded-lg overflow-hidden'>
			<img className='w-full object-cover h-72 ' src={image} />
			<div className='p-5 bg-white text-black text-center'>
				<Link to={link}>{title}</Link>
			</div>
			<div className='absolute top-4 right-3'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-8 h-8 text-yellow-500'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
					/>
				</svg>
			</div>
		</div>
	);
};

export default ItemCard;