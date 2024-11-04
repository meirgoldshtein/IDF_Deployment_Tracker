import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">דף הבית</NavLink>
                </li>
                <li>
                    <NavLink to="/UnitsPage">רשימת יחידות</NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;