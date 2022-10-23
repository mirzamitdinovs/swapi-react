import React, { useState } from 'react';

const Breadcrumb = ({ title, searchFunc, chooseType }) => {
	const [value, setValue] = useState('');
	const [type, setType] = useState('all');

	const handleType = (t) => {
		setType(t);
		chooseType(t);
	};
	return (
		<div className='py-5'>
			<h2 className='text-3xl font-bold'>
				{title} - <span className='text-yellow-500'>Star Wars</span>
			</h2>
			<div className='flex items-center justify-between my-5'>
				<div className='w-4/12'>
					<input
						className='text-black py-2 px-5 w-full rounded-lg'
						type={'text'}
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
							searchFunc(e.target.value);
						}}
					/>
				</div>
				<div className='flex'>
					<p
						onClick={() => handleType('all')}
						className={` cursor-pointer mr-5 ${
							type === 'all' ? 'text-yellow-500' : 'text-white'
						}`}
					>
						All
					</p>
					<p
						onClick={() => handleType('favourites')}
						className={` cursor-pointer ${
							type === 'favourites' ? 'text-yellow-500' : 'text-white'
						}`}
					>
						Favourites
					</p>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Breadcrumb;
