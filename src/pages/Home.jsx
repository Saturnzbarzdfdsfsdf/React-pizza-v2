import React from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

import { setCategoryIndex } from '../redux/slices/filterSlice'
import { fetchPizza } from '../redux/slices/pizzaSlice'

import {
	Categories,
	Sort,
	PizzaBlock,
	PizzaLoadingBlock,
	ErrorBlock,
} from '../components/index'


function Home() {
	// redux
	const dispatch = useDispatch()
	const { items, status } = useSelector(state => state.pizza)
	const { searchValue } = useSelector(state => state.filter)
	const categoryIndex = useSelector(state => state.filter.categoryIndex)
	const sortType = useSelector(state => state.filter.sort)

	const onChangeCategory = index => {
		dispatch(setCategoryIndex(index))
	}

	const getPizzas = async () => {
		const category = `${categoryIndex > 0 ? `category=${categoryIndex}` : ''}`
		const sortBy = `${sortType.sortProperty}&title=*${searchValue}`

		dispatch(
			fetchPizza({
				category,
				sortBy,
			})
		)
		window.scrollTo(0, 0)
	}
	
	React.useEffect(() => {
		getPizzas()
	}, [categoryIndex, sortType.sortProperty, searchValue])

	const skeletons = [...new Array(6)].map((_, index) => (
		<PizzaLoadingBlock key={index} />
	))
	const render = items.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)

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
			{status === 'error' ? (
				<>
				<ErrorBlock/>
				</>
			) : (
				<div className='content__items'>
					{status === 'loading' ? skeletons : render}
				</div>
			)}
		</>
	)
}

export default Home

// const fetchPizzas = async () => {
// 	setIsLoading(true)
// 	const category = `${categoryIndex > 0 ? `category=${categoryIndex}` : ''}`
// 	const sortBy = `${sortType.sortProperty}&title=*${searchValue}`

// 	try {
// 		const { data } = await axios.get(
// 			`https://c6c5967d399af698.mokky.dev/pizzas?${category}&sortBy=-${sortBy}`
// 		)
// 		// console.log('Received data:', data) // Добавьте это для проверки
// 		dispatch(setItems(data))
// 	} catch (error) {
// 		console.log('ERROR', error)
// 		alert('Ошибка при получении пицц')
// 	} finally {
// 		setIsLoading(false)
// 	}

// 	window.scrollTo(0, 0)
// }

// React.useEffect(() => {
// 	fetchPizzas()
// }, [categoryIndex, sortType.sortProperty, searchValue])
