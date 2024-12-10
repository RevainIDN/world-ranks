import '../styles/component_styles/FilterBar.css'

export default function FilterBar() {
	return (
		<div className='filter-bar'>
			<strong className='found-countries'>Found ... countries</strong>
			<div className='filter-cont'>
				<small className='filter-info'>Sort by</small>
				<div className='dropdown-list'>Population</div>
			</div>
			<div className='filter-cont'>
				<small className='filter-info'>Region</small>
				<ul className='filter-list'>
					<li className='filter-item'>Americas</li>
					<li className='filter-item'>Antarctic</li>
					<li className='filter-item'>Africa</li>
					<li className='filter-item'>Asia</li>
					<li className='filter-item'>Europe</li>
					<li className='filter-item'>Oceania</li>
				</ul>
			</div>
			<div className='filter-cont'>
				<small className='filter-info'>Status</small>
				<div className='filter-cont'>
					<label className='checkbox-label' htmlFor="united-nations">
						<input className='real-checkbox' name='united-nations' id='united-nations' type="checkbox" />
						<span className='custom-checkbox'></span>
						Member of the United Nations
					</label>
					<label className='checkbox-label' htmlFor="independents">
						<input className='real-checkbox' name='independents' id='independents' type="checkbox" />
						<span className='custom-checkbox'></span>
						Independent
					</label>
				</div>
			</div>
		</div>
	)
}