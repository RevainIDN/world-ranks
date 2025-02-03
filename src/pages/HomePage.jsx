import '../styles/page_styles/HomePage.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredCountries } from '../store/countriesSlice'
import FilterBar from '../components/FilterBar'
import CountriesList from '../components/CountriesList'

export default function HomePage() {
	const dispatch = useDispatch();
	const { countriesInfoList } = useSelector(state => state.countries);
	const { filterText, sortType, filterRegion, isUnMember, isIndependent } = useSelector(state => state.filters);

	useEffect(() => {
		const filtered = [...countriesInfoList]
			.filter((country) => {
				const matchesUnMember = isUnMember ? country.unMember === true : true;
				const matchesIndependent = isIndependent ? country.independent === true : true;
				const matchesRegion = filterRegion.length === 0 || filterRegion.includes(country.region);
				const matchesText =
					country.name.common.toLowerCase().includes(filterText.toLowerCase()) ||
					country.region.toLowerCase().includes(filterText.toLowerCase()) ||
					(country.subregion && country.subregion.toLowerCase().includes(filterText.toLowerCase()));

				return matchesUnMember && matchesIndependent && matchesText && matchesRegion;
			})
			.sort((a, b) => {
				if (sortType === "Population") return b.population - a.population;
				if (sortType === "Area") return b.area - a.area;
				if (sortType === "Alphabet") return a.name.common.localeCompare(b.name.common);
				return 0;
			});

		dispatch(setFilteredCountries(filtered));
	}, [countriesInfoList, filterText, sortType, filterRegion, isUnMember, isIndependent, dispatch]);

	return (
		<div className='home-page'>
			<div className='logo-container'>
				<img className='logo' src="/world-ranks/Logo.svg" alt="World Ranks" />
			</div>
			<div className='country-ranks'>
				<FilterBar />
				<CountriesList />
			</div>
		</div>
	)
}