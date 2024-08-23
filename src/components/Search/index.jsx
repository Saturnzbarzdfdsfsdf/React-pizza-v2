import React from 'react'

import {SearchContext} from '../../App'

import styles from './Search.module.scss'

const Search = () => {
	const { searchValue, setSearchValue } = React.useContext(SearchContext)

	return (
		<div className={styles.root}>
			<input
				className={styles.input}
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
				placeholder='Поиск пиццы...'
			/>
			<svg
				className={styles.icon}
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g id='SVGRepo_bgCarrier' strokeWidth='10'></g>
				<g
					id='SVGRepo_tracerCarrier'
					strokeLinecap='round'
					strokeLinejoin='round'
				></g>
				<g id='SVGRepo_iconCarrier'>
					{' '}
					<path
						d='M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
						stroke='#000000'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					></path>{' '}
				</g>
			</svg>
			{searchValue && (
				<svg
					onClick={() => setSearchValue('')}
					className={styles.close}
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
					<g
						id='SVGRepo_tracerCarrier'
						strokeLinecap='round'
						strokeLinejoin='round'
					></g>
					<g id='SVGRepo_iconCarrier'>
						<g id='Menu / Close_SM'>
							<path
								id='Vector'
								d='M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16'
								stroke='#000000'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
						</g>
					</g>
				</svg>
			)}
		</div>
	)
}

export default Search