import Movie from "./Movie";
import { useGetMovieNameQuery } from "../store/MoviesApiSlice";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector} from "react-redux";
import {setPage} from '../store/moviesSlice'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styles from '../styles/Pagination.module.scss'

const Movies = () => {
  const dispatch = useDispatch();
  const page =useSelector((state) => state.movies.page)
  const searchStr = useSelector((state) => state.movies.searchStr)
  const themes = useSelector((state) => state.theme.theme)

  const { data, isLoading } = useGetMovieNameQuery({ search: searchStr, page: page });
  if (isLoading) return <h3>Loading...</h3>;

  if(!data.Search || data?.Search?.length === 0) return <h3>No Data</h3>;
  console.log(data.Search)
  const handleChange = (event, value) => {
    dispatch(setPage({page: value}))
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#a54cff',
        contrastText: '#fff',
        contrastThreshold: 4.5,
      },
    },
  });

  const totalPages = Math.ceil(data.totalResults / 10)

  return (
    <>
      <div className="container">
        {data.Search.map(({ Title, Type, Poster, Year, imdbID }) => (
          <Movie
            key={imdbID}
            imdbID ={imdbID}
            Title={Title}
            Type={Type}
            Poster={Poster}
            Year={Year}
          />
        ))}
      </div>
      <ThemeProvider theme={theme}>
        <Pagination 
          count={totalPages} 
          className={themes === 'white' ? styles['black'] : styles['white']} 
          page={page} 
          onChange={handleChange} 
          color = 'primary'/>
      </ThemeProvider>
      
    </>
  );
};

export default Movies;
