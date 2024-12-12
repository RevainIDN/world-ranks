import '../styles/component_styles/CountriesList.css'
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

export default function CountriesList({ filteredCountries, currentPage, countriesPerPage, currentCountries, paginate, handleInput }) {
	const navigate = useNavigate();

	const handleCountryClick = (country) => {
		navigate(`/country/${country.name.common}`, { state: { country } });
	};

	return (
		<div className='countries-list'>
			<input className='search-input' type="text" placeholder='Search by Name, Region, Subregion' onChange={handleInput} />
			<table className='table'>
				<colgroup>
					<col style={{ width: '10%' }} />
					<col style={{ width: '30%' }} />
					<col style={{ width: '20%' }} />
					<col style={{ width: '20%' }} />
					<col style={{ width: '20%' }} />
				</colgroup>
				<thead className='table-title'>
					<tr>
						<th scope='col'><small>Flag</small></th>
						<th scope='col'><small>Name</small></th>
						<th scope='col'><small>Population</small></th>
						<th scope='col'><small>Area(km<sup>2</sup>)</small></th>
						<th scope='col'><small>Region</small></th>
					</tr>
				</thead>
				<tbody className='table-list'>
					{currentCountries.map(country => (
						<tr className='table-column' key={country.cca3}>
							<td className='table-line table-img' onClick={() => handleCountryClick(country)}><img src={country.flags.svg} alt={`${country.name.common}`} /></td>
							<td className='table-line table-country' onClick={() => handleCountryClick(country)}>{country.name.common}</td>
							<td className='table-line'>{country.population.toLocaleString('en-US')}</td>
							<td className='table-line'>{country.area.toLocaleString('en-US')}</td>
							<td className='table-line'>{country.region}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination
				currentPage={currentPage}
				countriesPerPage={countriesPerPage}
				totalCountries={filteredCountries}
				paginate={paginate}
			/>
		</div>
	)
}