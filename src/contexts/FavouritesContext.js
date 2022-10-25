import { createContext, useState } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
	const [favourites, setFavourites] = useState({
		characters: [],
		movies: [],
		starships: [],
		vehicles: [],
	});

	const toggleFavourites = (type, id) => {
		const selectedItem = favourites[type].find((item) => item == id);
		if (selectedItem) {
			setFavourites({
				...favourites,
				[type]: favourites[type].filter((item) => item != id),
			});
		} else {
			setFavourites({
				...favourites,
				[type]: [...favourites[type], id],
			});
		}
	};

	const isInFavourites = (type, id) => {
		const selectedItem = favourites[type].find((item) => item == id);
		return !!selectedItem;
	};

	return (
		<FavouritesContext.Provider
			value={{
				favourites,
				toggleFavourites,
				isInFavourites,
			}}
		>
			{children}
		</FavouritesContext.Provider>
	);
};

export default FavouritesContext;
