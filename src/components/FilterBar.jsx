import '../styles/component_styles/FilterBar.css'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSortType, toggleUnMember, toggleIndependent, setFilterRegion } from '../store/filtersSlice'
import { setCurrentPage } from '../store/paginationSlice'

export default function FilterBar() {
	const dispatch = useDispatch();
	const { filteredCountries } = useSelector(state => state.countries);
	const { sortType, filterRegion } = useSelector(state => state.filters);

	const dropdownRef = useRef(null);
	const buttonRef = useRef(null);
	const listRef = useRef(null);

	const handleSortChange = (type) => {
		dispatch(setSortType(type));
	};

	const handleRegionChange = (region) => {
		dispatch(setFilterRegion(region));
		dispatch(setCurrentPage(1))
	};

	const handleUnMemberCheck = (event) => {
		dispatch(toggleUnMember(event.target.checked));
		dispatch(setCurrentPage(1))
	}

	const handleIndependentCheck = (event) => {
		dispatch(toggleIndependent(event.target.checked));
		dispatch(setCurrentPage(1))
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
				<button ref={buttonRef} className='dropdown-btn'>{sortType}</button>
				<ul ref={listRef} className='dropdown-list'>
					<li className='drowdow-item' onClick={() => handleSortChange('Population')}>Population</li>
					<li className='drowdow-item' onClick={() => handleSortChange('Area')}>Area</li>
					<li className='drowdow-item' onClick={() => handleSortChange('Alphabet')}>Alphabetical order</li>
				</ul>
			</div>
			<div className='filter-cont'>
				<small className='filter-info'>Region</small>
				<ul className='filter-list'>
					<li className={`filter-item ${filterRegion.find(region => region === 'Americas') ? 'filter-item--active' : ''}`} onClick={() => handleRegionChange('Americas')}>Americas</li>
					<li className={`filter-item ${filterRegion.find(region => region === 'Antarctic') ? 'filter-item--active' : ''}`} onClick={() => handleRegionChange('Antarctic')}>Antarctic</li>
					<li className={`filter-item ${filterRegion.find(region => region === 'Africa') ? 'filter-item--active' : ''}`} onClick={() => handleRegionChange('Africa')}>Africa</li>
					<li className={`filter-item ${filterRegion.find(region => region === 'Asia') ? 'filter-item--active' : ''}`} onClick={() => handleRegionChange('Asia')}>Asia</li>
					<li className={`filter-item ${filterRegion.find(region => region === 'Europe') ? 'filter-item--active' : ''}`} onClick={() => handleRegionChange('Europe')}>Europe</li>
					<li className={`filter-item ${filterRegion.find(region => region === 'Oceania') ? 'filter-item--active' : ''}`} onClick={() => handleRegionChange('Oceania')}>Oceania</li>
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