import styles from "../styles/movie.module.scss";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { NavLink } from "react-router-dom"

const Movie = ({ Poster, Title, Type, Year, imdbID}) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={classNames([styles.movieCard, styles[`${theme}`]])}>
      <NavLink to={`/movie/${imdbID}`} 
      state={{id: `${imdbID}`}} 
      style={theme === 'white' ? {color: 'black'} : {color: 'white'}}>
        <div className="poster">
          <img src={Poster} alt={Title}></img>
        </div>
        <div className="movie-card description">
          <h4>{Title}</h4>
          <p>
            {Year}, {Type}
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default Movie;
