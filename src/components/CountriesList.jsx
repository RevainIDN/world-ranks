import '../styles/component_styles/CountriesList.css'

export default function CountriesList() {
	return (
		<div className='countries-list'>
			<input className='search-input' type="text" placeholder='Search by Name, Region, Subregion' />
			<table className='table'>
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
					<tr>
						<td>Flag</td>
						<td>Китай</td>
						<td>1,402,112,000</td>
						<td>9,706,961</td>
						<td>Азия</td>
					</tr>
					<tr>
						<td>Flag</td>
						<td>Китай</td>
						<td>1,402,112,000</td>
						<td>9,706,961</td>
						<td>Азия</td>
					</tr>
					<tr>
						<td>Flag</td>
						<td>Китай</td>
						<td>1,402,112,000</td>
						<td>9,706,961</td>
						<td>Азия</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}