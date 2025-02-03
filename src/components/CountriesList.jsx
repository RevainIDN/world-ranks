import '../styles/component_styles/CountriesList.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from '../store/filtersSlice';
import Pagination from './Pagination';

export default function CountriesList() {
	const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640);
			setIsTablet(window.innerWidth <= 1024);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const dispatch = useDispatch();
	const { currentCountry } = useSelector(state => state.pagination);

	const navigate = useNavigate();

	const handleCountryClick = (country) => {
		navigate(`/country/${country.name.common}`, { state: { country } });
	};

	const handleInput = (event) => {
		const value = event.target.value;
		dispatch(setFilterText(value));
	}

	return (
		<div className='countries-list'>
			<input className='search-input' type="text" placeholder='Search by Name, Region, Subregion' onChange={handleInput} />
			<table className='table'>
				<colgroup>
					<col style={isTablet ? { width: 'auto' } : { width: '13%' }} />
					<col style={isTablet ? { width: 'auto' } : { width: '27%' }} />
					<col style={isTablet ? { width: 'auto' } : { width: '20%' }} />
					{!isMobile && <col style={isTablet ? { width: 'auto' } : { width: '20%' }} />}
					{!isTablet && <col style={{ width: '20%' }} />}
				</colgroup>
				<thead className='table-title'>
					<tr>
						<th scope='col'><small>Flag</small></th>
						<th scope='col'><small>Name</small></th>
						<th scope='col'><small>Population</small></th>
						{!isMobile && <th scope='col'><small>Area(km<sup>2</sup>)</small></th>}
						{!isTablet && <th><small>Region</small></th>}
					</tr>
				</thead>
				<tbody className='table-list'>
					{currentCountry.map(country => (
						<tr className='table-column' key={country.cca3}>
							<td className='table-line table-img' onClick={() => handleCountryClick(country)}><img src={country.flags.svg} alt={`${country.name.common}`} /></td>
							<td className='table-line table-country' onClick={() => handleCountryClick(country)}>{country.name.common}</td>
							<td className='table-line table-population'>{country.population.toLocaleString('en-US')}</td>
							{!isMobile && <td className='table-line'>{country.area.toLocaleString('en-US')}</td>}
							{!isTablet && <td className='table-line'>{country.region}</td>}
						</tr>
					))}
				</tbody>
			</table>
			<Pagination />
		</div>
	)
}