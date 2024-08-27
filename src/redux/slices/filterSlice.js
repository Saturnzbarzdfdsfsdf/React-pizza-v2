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
    // setFilters(state, action) {
    //   state.sort.sortProperty = action.payload.sortProperty
    //   state.categoryIndex = Number(action.payload.categoryIndex);
    // }
	},
})


export const { setCategoryIndex, setSortType, setFilters } = filterSlice.actions

export default filterSlice.reducer