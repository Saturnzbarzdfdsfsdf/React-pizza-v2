import React from 'react'

import {
	Categories,
	Sort,
	PizzaBlock,
	PizzaLoadingBlock,
} from '../components/index'

function Home() {

	const [pizzas, setPizzas] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	
	// Контекст
	const [categoryId, setCategoryId] = React.useState(0)
	const [sortType, setSortType] = React.useState({
		name: 'популярности',
		sortProperty: 'rating',
	})

	React.useEffect(() => {
		setIsLoading(true)
		fetch(
			`https://c6c5967d399af698.mokky.dev/pizzas?${
				categoryId > 0 ? `category=${categoryId}` : ''
			}&sortBy=-${sortType.sortProperty}`
		)
			.then(response => {
				return response.json()
			})
			.then(array => {
				setPizzas(array)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId, sortType])

	console.log(categoryId, sortType)
	return (
		<>
			<div className='content__top'>
				<Categories
					value={categoryId}
					onChangeCategory={index => setCategoryId(index)}
				/>
				<Sort 
				value={sortType} 
				onChangeSort={index => setSortType(index)} 
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => (
							<PizzaLoadingBlock key={index} />
					  ))
					: pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
			</div>
		</>
	)
}

export default Home
