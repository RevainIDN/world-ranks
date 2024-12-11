import '../styles/component_styles/Pagination.css'

export default function Pagination({ currentPage, countriesPerPage, totalCountries, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCountries.length / countriesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className='pagination-cont'>
			<ul className="pagination">
				{
					pageNumbers.map(number => (
						<li className={`page-item ${currentPage === number ? `active` : ''}`} key={number}>
							<button onClick={() => paginate(number)}>
								{number}
							</button>
						</li>
					))
				}
			</ul>
		</div>
	)
}