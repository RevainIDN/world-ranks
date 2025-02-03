import { configureStore } from "@reduxjs/toolkit"
import countriesReducer from './countriesSlice'
import paginationReducer from './paginationSlice'
import filtersReducer from './filtersSlice'

const store = configureStore({
	reducer: {
		countries: countriesReducer,
		pagination: paginationReducer,
		filters: filtersReducer,
	}
})

export default store;