import React from 'react'


function Categories() {
	
	const [activeCategory, setActiveCategory] = React.useState(0);

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
				{categories.map((value, index) => (
					<li
						key={index}
						onClick={() => setActiveCategory(index)}
						className={activeCategory === index ? 'active' : ''}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories