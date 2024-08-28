import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	categoryIndex: 0,
	searchValue: '',
	sort: {
		name: 'популярности',
		sortProperty: 'rating',
	},
}
export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryIndex(state, action) {
			state.categoryIndex = action.payload
		},
		setSortType(state, action) {
			state.sort = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
	},
})


export const { setCategoryIndex, setSortType, setSearchValue } = filterSlice.actions

export default filterSlice.reducer