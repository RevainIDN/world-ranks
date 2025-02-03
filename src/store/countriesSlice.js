import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	countriesInfoList: [],
	filteredCountries: [],
}

const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		setCountries: (state, action) => {
			state.countriesInfoList = action.payload;
			state.filteredCountries = action.payload;
		},
		setFilteredCountries: (state, action) => {
			state.filteredCountries = action.payload;
		}
	}
})

export const { setCountries, setFilteredCountries } = countriesSlice.actions;
export default countriesSlice.reducer;