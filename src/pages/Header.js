import { NavLink } from "react-router-dom"
import { useDispatch, useSelector} from "react-redux";
import { setSearchStr } from "../store/moviesSlice";
import debounce from 'lodash.debounce'
import styles from '../styles/Layout.module.scss'
import classNames from 'classnames'

const Header = () =>{
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.theme)

    const handleChange = (e) => {
        dispatch(setSearchStr({searchStr: e.target.value === '' ? 'end' : e.target.value}))
    }


    return (
        <header className={classNames(styles[`${theme}`])}>
                <h3><NavLink to='/'>pix<span>ema</span></NavLink></h3>
                <input type="search" placeholder="Введите текст" onChange={debounce(handleChange, 500)}></input>
        </header>
    )
}

export default Header