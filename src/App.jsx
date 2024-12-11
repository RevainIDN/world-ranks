import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './styles/App.css'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const [countriesInfoList, getCountriesInfoList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(15);

  console.log(countriesInfoList);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const repsonse = await fetch('https://restcountries.com/v3.1/all');
        const data = await repsonse.json();
        getCountriesInfoList(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    };

    fetchData();
  }, []);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = countriesInfoList.slice(firstCountryIndex, lastCountryIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <Routes>
      <Route path='/' element={<HomePage
        countriesInfoList={countriesInfoList}
        currentPage={currentPage}
        countriesPerPage={countriesPerPage}
        currentCountry={currentCountry}
        paginate={paginate}
      />} />
      <Route path='/country' element={<CountryPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
