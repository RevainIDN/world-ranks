import '../styles/page_styles/CountryPage.css'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

export default function CountryPage({ countriesInfoList }) {
	const { countryName } = useParams();
	const location = useLocation();
	const countryData = location.state?.country;

	const countryCode = countryData.borders;

	if (!countryData) {
		return <p>Country data not found!</p>;
	}

	const navigate = useNavigate();
	const home = useNavigate();
	const handleCountryClick = (country) => {
		navigate(`/country/${country.name.common}`, { state: { country } });
	};

	return (
		<>
			<div className='home-page'>
				<div className='logo-container'>
					<img className='logo' src="/public/Logo.svg" alt="World Ranks" onClick={() => home('/')} />
				</div>
				<div className='country-page'>
					<img className='country-flag' src={`${countryData.flags.svg}`} alt={countryData.name.common} />
					<h1 className='country-name'>{countryData.name.common}</h1>
					<h2 className='country-fullname'>{countryData.name.official}</h2>
					<div className='details'>
						<ul className='details-info population-info'>
							<li className='population-title'>Population</li>
							<li className='population-count'>{countryData.population.toLocaleString('en-US')}</li>
						</ul>
						<ul className='details-info'>
							<li className='area-title'>Area(km<sup>2</sup>)</li>
							<li className='area-count'>{countryData.area.toLocaleString('en-US')}</li>
						</ul>
					</div>
					<div className='country-details'>
						<ul className='country-info'>
							<li className='info-title'>Capital</li>
							<li className='info-value'>
								{countryData.capital ? countryData.capital[0] : (<p>There is no capital in {countryData.name.common}</p>)}
							</li>
						</ul>
						<ul className='country-info'>
							<li className='info-title'>Subregion</li>
							{countryData.subregion ? (
								<li className='info-value'>{countryData.subregion}</li>
							) : (<p>There is no subregion in {countryData.name.common}</p>)}
						</ul>
						<ul className='country-info'>
							<li className='info-title'>Language</li>
							{countryData.languages ? (
								<li className='info-value'>
									{Object.keys(countryData.languages).map((key, index) => (
										<span key={index}>
											{countryData.languages[key]}
											{index < Object.keys(countryData.languages).length - 1 && ', '}
										</span>
									))}
								</li>
							) : (<p>There are no official languages in {countryData.name.common}</p>)}
						</ul>
						<ul className='country-info'>
							<li className='info-title'>Currencies</li>
							{countryData.currencies ? (
								<li className='info-value'>
									{Object.keys(countryData.currencies).map((currencyCode, index) => (
										<span key={index}>
											{countryData.currencies[currencyCode].name}
											{index < Object.keys(countryData.currencies).length - 1 && ', '}
										</span>
									))}
								</li>
							) : (<p>There are no currencies in {countryData.name.common}</p>)}
						</ul>
						<ul className='country-info'>
							<li className='info-title'>Continents</li>
							<li className='info-value'>{countryData.continents[0]}</li>
						</ul>
						<ul className='country-info neighbouring-countries'>
							<li className='info-title neighbouring-title'>Neighbouring Countries</li>
							<li className='info-value'>
								{countryData.borders && countryData.borders.length > 0 ? (
									<div className='neighbour-list'>
										{countriesInfoList.map((countryNeighbor) => {
											if (countryCode.includes(countryNeighbor.cca3)) {
												return <ul className='neighbour-item' key={countryNeighbor.cca3}>
													<li><img className='neighbour-img' src={countryNeighbor.flags.svg} alt={countryNeighbor.name.common} onClick={() => handleCountryClick(countryNeighbor)} /></li>
													<li><p className='neighbour-name'>{countryNeighbor.name.common}</p></li>
												</ul>
											}
											return null;
										})}
									</div>
								) : (<p>The {countryData.name.common} does not border any other country.</p>)}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}