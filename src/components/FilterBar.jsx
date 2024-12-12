import '../styles/component_styles/FilterBar.css'
import { useEffect, useRef } from 'react'

export default function FilterBar({ filteredCountries, handleIndependentCheck, handleUnMemberCheck, handleSortChange }) {
	const dropdownRef = useRef(null);
	const buttonRef = useRef(null);
	const listRef = useRef(null);

	const handleSort = (type) => {
		handleSortChange(type);
	}

	const handleClick = () => {
		listRef.current.classList.toggle('dropdown-list--visible');
	};

	useEffect(
		() => {
			const button = buttonRef.current;

			if (button) {
				button.addEventListener('click', handleClick);
			}

			return () => {
				if (button) {
					button.removeEventListener('click', handleClick);
				}
			};
		}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target) &&
				listRef.current.classList.contains('dropdown-list--visible')
			) {
				listRef.current.classList.remove('dropdown-list--visible');
			}
		};

		window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className='filter-bar'>
			<strong className='found-countries'>Found {filteredCountries.length} countries</strong>
			<div ref={dropdownRef} className='filter-cont'>
				<small className='filter-info'>Sort by</small>
				<button ref={buttonRef} className='dropdown-btn'>Population</button>
				<ul ref={listRef} className='dropdown-list'>
					<li className='drowdow-item' onClick={() => handleSort('population')}>Population</li>
					<li className='drowdow-item' onClick={() => handleSort('area')}>Area</li>
					<li className='drowdow-item' onClick={() => handleSort('alphabet')}>Alphabetical order</li>
				</ul>
			</div>
			<div className='filter-cont'>
				<small className='filter-info'>Region</small>
				<ul className='filter-list'>
					<li className='filter-item filter-item--active'>Americas</li>
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
						<input className='real-checkbox' name='united-nations' id='united-nations' type="checkbox" onChange={handleUnMemberCheck} />
						<span className='custom-checkbox'></span>
						Member of the United Nations
					</label>
					<label className='checkbox-label' htmlFor="independents">
						<input className='real-checkbox' name='independents' id='independents' type="checkbox" onChange={handleIndependentCheck} />
						<span className='custom-checkbox'></span>
						Independent
					</label>
				</div>
			</div>
		</div>
	)
}