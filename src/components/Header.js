import React from "react";
import Notes from "./Notes";
import logo from '../logo.png';

import { NavLink } from "react-router-dom";

const Header = props => {
    
    return (
        <>

            <nav className="headerNav">


                <img className="logo" src={logo} alt="logo" />

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