import '../styles/component_styles/Pagination.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setCurrentCountry } from '../store/paginationSlice';

export default function Pagination() {
	const dispatch = useDispatch();
	const { filteredCountries } = useSelector(state => state.countries);
	const { currentPage } = useSelector(state => state.pagination)
	const pageNumbers = [];
	const countriesPerPage = 15;
	const paginate = pageNumber => dispatch(setCurrentPage(pageNumber))

	useEffect(() => {
		const lastCountryIndex = currentPage * countriesPerPage;
		const firstCountryIndex = lastCountryIndex - countriesPerPage;
		dispatch(setCurrentCountry(filteredCountries.slice(firstCountryIndex, lastCountryIndex)))
	}, [filteredCountries, currentPage, dispatch])


	for (let i = 1; i <= Math.ceil(filteredCountries.length / countriesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className='pagination-cont'>
			<ul className="pagination">
				{
					pageNumbers.map(number => (
						<li className={`page-item ${currentPage === number ? `active` : ''}`} key={number}>
							<button onClick={() => paginate(number)}>
								{number}
							</button>
						</li>
					))
				}
			</ul>
		</div>
	)
}