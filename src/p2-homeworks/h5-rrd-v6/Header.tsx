import React from 'react'
import {NavLink} from "react-router-dom";
import classes from './Pages.module.css'

function Header() {
    return (
        <div className={classes.main}>

            <NavLink className={classes.item} to={'/'}>PreJunior</NavLink>

            <NavLink className={classes.item} to={'/Junior'}>Junior</NavLink>
            <NavLink className={classes.item} to={'/Junior_plus'}>JuniorPlus</NavLink>
            <a className={classes.item} href={'https://www.instagram.com/ankadov/?hl=en'}
            target={'_blank'}
            rel={'noreferrer nofollow noopener'}>MyInfo</a>
            <div className={classes.block}>***</div>

        </div>
    )
}

export default Header
