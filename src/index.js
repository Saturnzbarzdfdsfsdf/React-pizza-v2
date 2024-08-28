import React from 'react'
import ReactDOM from 'react-dom/client'

// react-router
import { BrowserRouter } from 'react-router-dom'

// redux
import { Provider } from 'react-redux'
import {store} from './redux/store'


import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
			<Provider store={store} >
			<App />
			</Provider>
	</BrowserRouter>
)
