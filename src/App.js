import React from 'react';

import {Routes, Route } from 'react-router-dom';

import { Header} from './components/index';
import { Home, NotFound, Cart } from './pages/index';

import './scss/app.scss';

function App() {
	
	return (
		<div className='App'>
			<div className='wrapper'>
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
			</div>
		</div>
	)
}

export default App
