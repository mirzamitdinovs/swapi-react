import Breadcrumb from 'components/Breadcrumb';
import ItemCard from 'components/ItemCard';
import Loader from 'components/Loader';
import FavouritesContext from 'contexts/FavouritesContext';
import { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
const fetcher = (url) =>
	fetch(url)
		.then((res) => res.json())
		.then((res) => res.results);
const Starships = () => {
	const [starships, setStarships] = useState([]);
	const { favourites, toggleFavourites, isInFavourites } =
		useContext(FavouritesContext);
	const { data } = useSWR('https://swapi.dev/api/starships', fetcher);
	useEffect(() => {
		if (data && !starships.length) {
			setStarships(data);
		}
	}, [data]);

	const searchStarships = (text) => {
		const sortedData = data.filter((item) =>
			item.name.toLowerCase().includes(text.toLowerCase())
		);
		setStarships(sortedData);
	};

	const chooseType = (type) => {
		if (type === 'all') {
			setStarships(data);
		} else {
			const favData = favourites['starships'];
			setStarships(favData.map((id) => data.find((item) => item.id == id)));
		}
	};

	const choosePage = (page) => {
		console.log('page: ', page);
	};

	if (!data) return <Loader />;

	console.log('starships: ', starships);
	return (
		<div>
			<Breadcrumb
				title={'starships'}
				searchFunc={searchStarships}
				chooseType={chooseType}
				choosePage={choosePage}
				currentPage={1}
				totalPage={Math.ceil(data.length / 10)}
			/>

			<div className='grid grid-cols-6 gap-4'>
				{starships.map((item, index) => (
					<ItemCard
						key={item.id}
						title={item.name}
						link={`/starships/${item.id}`}
						image={`https://starwars-visualguide.com/assets/img/starships/${
							index + 1
						}.jpg`}
						selected={isInFavourites('starships', item.id)}
						toggleFav={() => toggleFavourites('starships', item.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default Starships;
