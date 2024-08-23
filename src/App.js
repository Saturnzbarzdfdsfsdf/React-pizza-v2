import React from 'react';

import {Routes, Route } from 'react-router-dom';


import { Header} from './components/index';
import { Home, NotFound, Cart } from './pages/index';

import './scss/app.scss';

// Контекст
export const SearchContext = React.createContext();

function App() {

	const [searchValue, setSearchValue] = React.useState([])
	
	return (
		<div className='App'>
			<div className='wrapper'>
				<SearchContext.Provider value={{ searchValue , setSearchValue}}>
					<Header />
					<div className='content'>
						<div className='container'>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/Cart' element={<Cart />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</div>
					</div>
				</SearchContext.Provider>
			</div>
		</div>
	)
}

export default App
