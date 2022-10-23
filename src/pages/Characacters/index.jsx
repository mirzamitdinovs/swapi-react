import Breadcrumb from 'components/Breadcrumb';
import ItemCard from 'components/ItemCard';
import Loader from 'components/Loader';
import { FETCHER } from 'helpers';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
const Characters = () => {
	const [characters, setCharacters] = useState([]);
	const { data } = useSWR(
		'https://akabab.github.io/starwars-api/api/all.json',
		FETCHER
	);

	useEffect(() => {
		if (data) {
			setCharacters(data);
		}
	}, []);

	const searchCharacters = (text) => {
		const sortedData = data.filter((item) =>
			item.name.toLowerCase().includes(text.toLowerCase())
		);
		setCharacters(sortedData);
	};

	const chooseType = (type) => {
		if (type === 'all') {
			setCharacters(data);
		} else {
			setCharacters([]);
		}
	};

	const choosePage = (page) => {
		console.log('page: ', page);
	};

	console.log('characters: ', characters);

	if (!data) return <Loader />;
	return (
		<div>
			<Breadcrumb
				title={'Characters'}
				searchFunc={searchCharacters}
				chooseType={chooseType}
				choosePage={choosePage}
				currentPage={1}
				totalPage={Math.ceil(data.length / 10)}
			/>
			<div className='grid grid-cols-6 gap-4'>
				{characters.map((item) => (
					<ItemCard
						key={item.id}
						title={item.name}
						link={`/characters/${item.id}`}
						image={item.image}
						toggleFav={() => console.log('hello')}
					/>
				))}
			</div>
		</div>
	);
};

export default Characters;
