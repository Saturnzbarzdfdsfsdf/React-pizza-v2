import React from 'react'

import {
	Categories,
	Sort,
	PizzaBlock,
	PizzaLoadingBlock,
} from '../components/index'

function Home({ searchValue }) {
	const [pizzas, setPizzas] = React.useState([])

	const [isLoading, setIsLoading] = React.useState(true)

	// Контекст
	const [categoryIndex, setCategoryIndex] = React.useState(0)
	const [sortType, setSortType] = React.useState({
		name: 'популярности',
		sortProperty: 'rating',
	})

	const category = `${categoryIndex > 0 ? `category=${categoryIndex}` : ''}`
	const sortBy = `${sortType.sortProperty}&title=*${searchValue}`


	React.useEffect(() => {
		setIsLoading(true)
		fetch(
			`https://c6c5967d399af698.mokky.dev/pizzas?${category}&sortBy=-${sortBy}`
		)
			.then(response => {
				return response.json()
			})
			.then(array => {
				setPizzas(array)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [category, sortBy, searchValue])

	return (
		<>
			<div className='content__top'>
				<Categories
					categoryIndex={categoryIndex}
					onChangeCategory={index => setCategoryIndex(index)}
				/>
				<Sort sortType={sortType} onChangeSort={index => setSortType(index)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => (
							<PizzaLoadingBlock key={index} />
					  ))
					: pizzas.map(pizza => (
							<PizzaBlock key={pizza.id} {...pizza} />
					  ))}
			</div>
		</>
	)
}

export default Home
