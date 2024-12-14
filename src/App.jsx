import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './styles/App.css'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const [countriesInfoList, setCountriesInfoList] = useState([]);
  const [countriesPerPage] = useState(15);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem('countriesData')
        if (cachedData) {
          setCountriesInfoList(JSON.parse(cachedData));
        } else {
          try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountriesInfoList(data);
            localStorage.setItem('countriesData', JSON.stringify(data));
          } catch (error) {
            console.error('Ошибка при загрузке данных:', error)
          }
        }
      } catch (error) {
        console.error('Error reading data from localStorage:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage
        countriesInfoList={countriesInfoList}
        countriesPerPage={countriesPerPage}
      />} />
      <Route path='/country/:countryName' element={<CountryPage
        countriesInfoList={countriesInfoList}
      />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
