import React from 'react'

import axios from 'axios'

import { useParams } from 'react-router-dom'

function FullPizza() {
	const { id } = useParams()
	const [pizza, setPizza] = React.useState()

	React.useEffect(() => {

		async function fatchPizza() {
			try {
				const { data } = await axios.get(
					'https://c6c5967d399af698.mokky.dev/pizzas/' + id
				)
				setPizza(data)
			} catch (error) {
        alert('Ошибка при получение пиццы!')
      }
		}

    fatchPizza()

	}, [])

  if (!pizza) {
    return 'Загрузка..'
  }

	return (
		<div className='container'>
      <div className='center'>
      <div className="full-pizza">
			<img src={pizza.imageUrl} />
			<h2 >{pizza.title}</h2>
			<p> {pizza.price} </p>
			<h4>{pizza.title}</h4>
      </div>
      </div>
		</div>
	)
}

export default FullPizza
