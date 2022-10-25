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
const Movies = () => {
	const [movies, setMovies] = useState([]);
	const { favourites, toggleFavourites, isInFavourites } =
		useContext(FavouritesContext);
	const { data } = useSWR('https://swapi.dev/api/films', fetcher);
	useEffect(() => {
		if (data && !movies.length) {
			setMovies(data);
		}
	}, [data]);

	const searchMovies = (text) => {
		const sortedData = data.filter((item) =>
			item.name.toLowerCase().includes(text.toLowerCase())
		);
		setMovies(sortedData);
	};

	const chooseType = (type) => {
		if (type === 'all') {
			setMovies(data);
		} else {
			const favData = favourites['movies'];
			setMovies(favData.map((id) => data.find((item) => item.id == id)));
		}
	};

	const choosePage = (page) => {
		console.log('page: ', page);
	};

	if (!data) return <Loader />;

	console.log('movies: ', movies);
	return (
		<div>
			<Breadcrumb
				title={'movies'}
				searchFunc={searchMovies}
				chooseType={chooseType}
				choosePage={choosePage}
				currentPage={1}
				totalPage={Math.ceil(data.length / 10)}
			/>

			<div className='grid grid-cols-6 gap-4'>
				{movies.map((item) => (
					<ItemCard
						key={item.id}
						title={item.title}
						link={`/movies/${item.id}`}
						image={`https://starwars-visualguide.com/assets/img/films/${item.episode_id}.jpg`}
						selected={isInFavourites('movies', item.id)}
						toggleFav={() => toggleFavourites('movies', item.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default Movies;
