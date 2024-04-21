import { useLocation } from "react-router-dom"
import { useGetMovieByIdQuery } from "../store/MoviesApiSlice";
import styles from "../styles/selectedMovie.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";

const SelectedMovie = () => {
    const theme = useSelector((state) => state.theme.theme);
    const location = useLocation();
    const {state} = location
    const { data, isLoading } = useGetMovieByIdQuery({id: state.id})
    if (isLoading) return <h3>Loading...</h3>;
    const {Title, Type, Plot, Genre, Writer, Year, imdbRating, Poster} = data
    console.log(data)
    return(
        <div className={classNames([styles.selectedMovie, styles[`${theme}`]])}>
            <img src={Poster} alt={Title}></img>
            <div className={styles.selectedMovieText}>
                <h3>{Title}</h3>
                <p className={styles.text}>{Type},{Year}</p>
                <p>Genre: {Genre}</p>
                <p>Authors: {Writer}</p>
                <p>{Plot}</p>
                <p>Rating: {imdbRating}</p>
            </div>
        </div>
    )
}

export default SelectedMovie