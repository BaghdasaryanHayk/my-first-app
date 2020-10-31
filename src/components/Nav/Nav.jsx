import React from 'react';
import c from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile' activeClassName={c.activeLink}>Profile</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to='/dialogs' activeClassName={c.activeLink}>Messages</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to='/users' activeClassName={c.activeLink}>Users</NavLink>
            </div>

            <div className={c.item}>
                <NavLink to='/news' activeClassName={c.activeLink}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/musics' activeClassName={c.activeLink}>Musics</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/settings' activeClassName={c.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav