import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { FavouritesProvider } from 'contexts/FavouritesContext';
import Characters from 'pages/Characacters';
import CharacterDetails from 'pages/CharacterDetails';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import StarshipDetails from 'pages/StarshipDetails';
import Starships from 'pages/Starships';
import VehicleDetails from 'pages/VehicleDetails';
import Vehicles from 'pages/Vehicles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
	return (
		<div className='bg-[#1B1A17] min-h-screen text-white flex flex-col'>
			<BrowserRouter>
				<Navbar />
				<div className='flex-1 container mx-auto'>
					<FavouritesProvider>
						<Routes>
							<Route path='/' element={<Characters />} />
							<Route path='/characters/:id' element={<CharacterDetails />} />

							<Route path='/movies'>
								<Route path=':id' element={<MovieDetails />} />
								<Route index element={<Movies />} />
							</Route>

							<Route path='/starships'>
								<Route path=':id' element={<StarshipDetails />} />
								<Route index element={<Starships />} />
							</Route>

							<Route path='/vehicles'>
								<Route path=':id' element={<VehicleDetails />} />
								<Route index element={<Vehicles />} />
							</Route>
						</Routes>
					</FavouritesProvider>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
