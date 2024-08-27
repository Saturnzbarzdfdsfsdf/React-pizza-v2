import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
  items: [],
}
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				})
			}

			state.totalPrice = state.items.reduce((currentSum, obj) => {
				return obj.price * obj.count + currentSum
			}, 0)
		},
		plusItem(state, action) {
					const findItem = state.items.find(obj => obj.id === action.payload)
						if (findItem) {
							findItem.count++
						}
		},
		minusItem(state, action) {
					const findItem = state.items.find(obj => obj.id === action.payload)
					if (findItem) {
						findItem.count--
					}
		},
		
		removeItem(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload)
			state.totalPrice = 0
		},
		clearItem(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
})

export const { addItem, removeItem, clearItem, totalPrice, minusItem, plusItem } =
	cartSlice.actions

export default cartSlice.reducer

