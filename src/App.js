import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TrendPage from './pages/TrendPage';
import SettingPage from './pages/SettingPage';
import FavoritePage from './pages/FavoritePage';
import MoviePage from './pages/MoviePage';

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}></Route>
        <Route path="trends" element={<TrendPage/>}></Route>
        <Route path="favorite" element={<FavoritePage/>}></Route>
        <Route path="settings" element={<SettingPage/>}></Route>
        <Route path="movie/:param" element={<MoviePage/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
