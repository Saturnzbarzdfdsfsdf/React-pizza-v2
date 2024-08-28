import axios from 'axios'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPizza = createAsyncThunk(
	'pizza/fetchPizza',

	async (params) => {
		const { category, sortBy } = params
		const { data } = await axios.get(
			`https://c6c5967d399af698.mokky.dev/pizzas?${category}&sortBy=-${sortBy}`
		)

		return await data
	}
)
const initialState = {
	items: [],
	status: 'loading', //loading | success | error
}

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPizza.pending, state => {
				state.status = 'loading'
				state.items = []
			})
			.addCase(fetchPizza.fulfilled, (state, action) => {
				state.items = action.payload
				state.status = 'success'
			})
			.addCase(fetchPizza.rejected, state => {
				state.status = 'error'
				state.items = []
			})
	},
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
// 	items: [],
// }

// export const pizzaSlice = createSlice({
// 	name: 'pizza',
// 	initialState,
// 	reducers: {
//     setItems(state, action) {
//       state.items = action.payload
//     },
// 	},
// })

// export const { setItems } = pizzaSlice.actions

// export default pizzaSlice.reducer
