import React from "react";
import logo from '../logo.png';

import { NavLink } from "react-router-dom";

const Header = props => {

    return (
        <>

            <nav className="headerNav">

                <NavLink to="/" className="logoBox">

                    <img className="logo" src={logo} alt="logo" />
                    
                </NavLink>

                <ul>
                    <li><NavLink to="/statistics"
                        activeStyle={{
                            textDecoration: "underline",
                        }}
                    >
                        Статистика
                    </NavLink>
                    </li>

                    <li><NavLink to="/expenses"
                        activeStyle={{
                            textDecoration: "underline",
                        }}
                    >
                        Расходы
                    </NavLink>
                    </li>

                </ul>

            </nav>

        </>
    )
}


export default Header;