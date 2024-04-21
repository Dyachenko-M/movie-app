import * as React from 'react';
import Header from '../pages/Header'
import Aside from "../pages/Aside";
import classNames from 'classnames'
import styles from '../styles/theme.module.scss'
import { useSelector} from "react-redux";

const Layout = () =>{
    const theme = useSelector((state) => state.theme.theme)

    return (
        <div className={classNames(styles[`${theme}`])}>
            <Header />
            <Aside />
                                                            
        </div>
    )
}

export default Layout