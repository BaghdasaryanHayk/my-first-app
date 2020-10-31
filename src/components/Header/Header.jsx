import React from 'react';
import c from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return(
        <header className={c.header}>
            <img src="https://www.mannyleon.com/wp-content/uploads/2019/07/Leon-Marketing-Logo-web-lion-retina.png" />

        <div className={c.loginBlock} >
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout} >Log out</button> </div>
            : <NavLink to={'/login'} >Login</NavLink> }
        </div>

        </header>
    )
}

export default Header