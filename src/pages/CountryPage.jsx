import '../styles/page_styles/CountryPage.css'

export default function CountryPage() {
	return (
		<>
			<div className='home-page'>
				<div className='logo-container'>
					<img className='logo' src="/public/Logo.svg" alt="World Ranks" />
				</div>
				<div className='country-page'>
					<img src="" alt="" />
					<h1 className='country-name'>India</h1>
					<h2 className='country-fullname'>Republic of India</h2>
					<div className='details'>
						<ul className='details-info population-info'>
							<li className='population-title'>Population</li>
							<li className='population-count'>1,380,004,385</li>
						</ul>
						<ul className='details-info area-info'>
							<li className='area-title'>Area(km<sup>2</sup>)</li>
							<li className='area-count'>2,973,190</li>
						</ul>
					</div>
					<div className='country-details'>
						<ul className='country-info'>
							<li className='info-title'>Capital</li>
							<li className='info-value'>New Dehli</li>
						</ul>
						<ul className='country-info'>
							<li className='info-title'>Subregion</li>
							<li className='info-value'>Southern Asia</li>
						</ul>
						<ul className='country-info'>
							<li className='info-title'>Language</li>
							<li className='info-value'>English, Hindi, Tamil</li>
						</ul>
						<ul className='country-info'>
							<li className='info-title'>Currencies</li>
							<li className='info-value'>Indian rupee</li>
						</ul>
						<ul className='country-info'>
							<li className='info-title'>Continents</li>
							<li className='info-value'>Asia</li>
						</ul>
						<ul className='country-info'>
							<li className='info-title'>Neighbouring Countries</li>
							<li className='info-value'>
								<ul>
									<li><img src="" alt="" /></li>
									<li>Afganistan</li>
								</ul>
								<ul>
									<li><img src="" alt="" /></li>
									<li>Bangladesh</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}