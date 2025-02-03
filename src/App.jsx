import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setCountries } from './store/countriesSlice'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem('countriesData')
        if (cachedData) {
          dispatch(setCountries(JSON.parse(cachedData)))
        } else {
          try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            dispatch(setCountries(data))
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
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/country/:countryName'
        element={<CountryPage />}
      />
      <Route
        path='*'
        element={<NotFoundPage />}
      />
    </Routes>
  )
}
