import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryIndex: 0,
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
	},
})

// Action creators are generated for each case reducer function
export const { setCategoryIndex, setSortType } = filterSlice.actions

export default filterSlice.reducer