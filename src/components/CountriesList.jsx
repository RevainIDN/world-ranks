import '../styles/component_styles/CountriesList.css'
import { useState } from 'react'
import Pagination from './Pagination';

export default function CountriesList({ countriesInfoList, currentPage, countriesPerPage, currentCountries, paginate, handleInput }) {
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
						<tr key={country.cca3}>
							<td className='table-img'><img src={country.flags.svg} alt="" /></td>
							<td>{country.name.common}</td>
							<td>{country.population}</td>
							<td>{country.area}</td>
							<td>{country.region}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination
				currentPage={currentPage}
				countriesPerPage={countriesPerPage}
				totalCountries={countriesInfoList}
				paginate={paginate}
			/>
		</div>
	)
}