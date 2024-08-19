import React from "react";

import {
	Header,
	Categories,
	Sort,
	PizzaBlock,
	LoadingBlock,
	PizzaLoadingBlock,
} from './components/index'

// import pizzas from './assets/pizzas.json'

import './scss/app.scss';

function App() {


	const [pizzas, setPizzas] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		fetch('https://c6c5967d399af698.mokky.dev/pizzas').then((response) => {
			return response.json();
		}).then((array) => {
			setPizzas(array);
			setIsLoading(false)
		});
	},[])

	return (
		<div className='App'>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<div className='content__top'>
							<Categories />
							<Sort />
						</div>
						<h2 className='content__title'>Все пиццы</h2>
						<div className='content__items'>
							{isLoading
								? [...new Array(6)].map((_, index) => <PizzaLoadingBlock  key={index}/>)
								: pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;


