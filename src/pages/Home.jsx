import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryIndex } from '../redux/slices/filterSlice'

// Контекст
import { SearchContext } from '../App'

import {
	Categories,
	Sort,
	PizzaBlock,
	PizzaLoadingBlock,
} from '../components/index'

function Home() {
	// redux
	const dispatch = useDispatch()
	const categoryIndex = useSelector(state => state.filter.categoryIndex)
	const sortType = useSelector(state => state.filter.sort)

	const [pizzas, setPizzas] = React.useState([])

	// Контекст
	const { searchValue } = React.useContext(SearchContext)

	const [isLoading, setIsLoading] = React.useState(true)

	const onChangeCategory = index => {
		dispatch(setCategoryIndex(index))
	}

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
					onChangeCategory={onChangeCategory}
				/>
				<Sort />
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
