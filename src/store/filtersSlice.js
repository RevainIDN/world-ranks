import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filterText: '',
	sortType: 'Population',
	filterRegion: [],
	isUnMember: false,
	isIndependent: false,
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilterText: (state, action) => {
			state.filterText = action.payload;
		},
		setSortType: (state, action) => {
			state.sortType = action.payload;
		},
		toggleUnMember: (state) => {
			state.isUnMember = !state.isUnMember;
		},
		toggleIndependent: (state) => {
			state.isIndependent = !state.isIndependent;
		},
		setFilterRegion: (state, action) => {
			const region = action.payload;
			if (state.filterRegion.includes(region)) {
				state.filterRegion = state.filterRegion.filter(r => r !== region);
			} else {
				state.filterRegion.push(region);
			}
		},
		resetFilters: (state) => {
			state.filterText = '';
			state.sortType = 'Population';
			state.isUnMember = false;
			state.isIndependent = false;
			state.filterRegion = [];
		}
	}
})

export const { setFilterText, setSortType, toggleUnMember, toggleIndependent, setFilterRegion, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;