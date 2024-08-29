import React from 'react'

function Categories({ categoryIndex, onChangeCategory }) {
	const categories = [
		'Все',
		'Гриль',
		'Острые',
		'Мясные',
		'Закрытые',
		'Вегетарианская',
	]

	return (
		<div className='categories'>
			<ul>
				{categories.map((categoryName, index) => (
					<li
						key={index}
						onClick={() => onChangeCategory(index)}
						className={categoryIndex === index ? 'active' : ''}
					>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
