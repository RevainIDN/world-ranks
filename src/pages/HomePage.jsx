import '../styles/page_styles/HomePage.css'
import FilterBar from '../components/FilterBar'
import CountriesList from '../components/CountriesList'

export default function HomePage() {
	return (
		<div className='home-page'>
			<div className='logo-container'>
				<img className='logo' src="/public/Logo.svg" alt="World Ranks" />
			</div>
			<div className='country-ranks'>
				<FilterBar />
				<CountriesList />
			</div>
		</div>
	)
}