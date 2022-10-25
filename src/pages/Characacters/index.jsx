import Breadcrumb from 'components/Breadcrumb';
import ItemCard from 'components/ItemCard';
import Loader from 'components/Loader';
import FavouritesContext from 'contexts/FavouritesContext';
import { FETCHER } from 'helpers';
import React, { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
const Characters = () => {
	const [characters, setCharacters] = useState([]);
	const { favourites, toggleFavourites, isInFavourites } =
		useContext(FavouritesContext);
	const { data } = useSWR(
		'https://akabab.github.io/starwars-api/api/all.json',
		FETCHER
	);

	useEffect(() => {
		if (data && !characters.length) {
			setCharacters(data);
		}
	}, [data]);

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
			const favData = favourites['characters'];
			setCharacters(favData.map((id) => data.find((item) => item.id == id)));
		}
	};

	const choosePage = (page) => {
		console.log('page: ', page);
	};

	console.log('data: ', data);

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
						selected={isInFavourites('characters', item.id)}
						toggleFav={() => toggleFavourites('characters', item.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default Characters;
