import '../styles/page_styles/HomePage.css'
import { useState } from 'react'
import FilterBar from '../components/FilterBar'
import CountriesList from '../components/CountriesList'

export default function HomePage({ countriesInfoList, currentPage, countriesPerPage, currentCountry, paginate }) {
	const [filterText, setFilterText] = useState('');
	const [sortType, setSortType] = useState('population');
	const [filterRegion, setFilterRegion] = useState([]);
	const [isUnMember, setIsUnMember] = useState(false);
	const [isIndependent, setIsIndependent] = useState(false);

	const handleRegionChange = (region) => {
		setFilterRegion((prev) =>
			prev.includes(region)
				? prev.filter((r) => r !== region) // Удаляем, если уже выбран
				: [...prev, region] // Добавляем, если не выбран
		);
	}

	const handleSortChange = (type) => {
		setSortType(type);
	};

	const filteredCountries = [...countriesInfoList]
		.filter((country) => {
			const matchesUnMember = isUnMember ? country.unMember === true : true;

			const matchesIndependent = isIndependent ? country.independent === true : true;

			const matchesRegion = filterRegion.length === 0 || filterRegion.includes(country.region);

			const matchesText =
				country.name.common.toLowerCase().includes(filterText.toLowerCase()) ||
				country.region.toLowerCase().includes(filterText.toLowerCase()) ||
				(country.subregion && country.subregion.toLowerCase().includes(filterText.toLowerCase()))

			return (matchesUnMember && matchesIndependent && matchesText && matchesRegion)
		})
		.sort((a, b) => {
			if (sortType === 'population') return b.population - a.population;
			if (sortType === 'area') return b.area - a.area;
			if (sortType === 'alphabet') return a.name.common.localeCompare(b.name.common);
			return 0;
		});

	const handleInput = (event) => {
		const value = event.target.value;
		setFilterText(value);
	}

	const handleUnMemberCheck = (event) => {
		setIsUnMember(event.target.checked);
	}

	const handleIndependentCheck = (event) => {
		setIsIndependent(event.target.checked);
	}

	console.log(isUnMember, isIndependent)

	const indexOfLastCountry = currentPage * countriesPerPage;
	const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
	const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

	return (
		<div className='home-page'>
			<div className='logo-container'>
				<img className='logo' src="/public/Logo.svg" alt="World Ranks" />
			</div>
			<div className='country-ranks'>
				<FilterBar
					filteredCountries={filteredCountries}
					handleIndependentCheck={handleIndependentCheck}
					handleUnMemberCheck={handleUnMemberCheck}
					handleSortChange={handleSortChange}
					handleRegionChange={handleRegionChange}
					filterRegion={filterRegion}
				/>
				<CountriesList
					countriesInfoList={filteredCountries}
					currentPage={currentPage}
					countriesPerPage={countriesPerPage}
					currentCountry={currentCountry}
					paginate={paginate}
					handleInput={handleInput}
					currentCountries={currentCountries}
				/>
			</div>
		</div>
	)
}