import React from 'react'

import axios from 'axios'

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

	const onChangeCategory = index => {
		dispatch(setCategoryIndex(index))
	}

	// Контекст
	const { searchValue } = React.useContext(SearchContext)

	const [isLoading, setIsLoading] = React.useState(true)

	// for get
	const category = `${categoryIndex > 0 ? `category=${categoryIndex}` : ''}`
	const sortBy = `${sortType.sortProperty}&title=*${searchValue}`

	const fetchPizzas = () => {
		setIsLoading(true)

		axios
			.get(
				`https://c6c5967d399af698.mokky.dev/pizzas?${category}&sortBy=-${sortBy}`
			)
			.then(response => {
				setPizzas(response.data)

				setIsLoading(false)
			})
		}
		
		React.useEffect(() => {
			fetchPizzas()
			window.scrollTo(0, 0)
	}, [categoryIndex, sortType.sortProperty, searchValue])

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
