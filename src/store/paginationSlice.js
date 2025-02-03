import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentPage: 1,
	currentCountry: [],
}

const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setCurrentCountry: (state, action) => {
			state.currentCountry = action.payload;
		}
	}
})

export const { setCurrentPage, setCurrentCountry } = paginationSlice.actions;
export default paginationSlice.reducer;