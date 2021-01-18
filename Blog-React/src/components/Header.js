import React from 'react';
import logo from '../img/epitech-logo-blanc.png';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <img className="logo" src={logo} />
                <br/>
                <div className="name">
                   Ethan's Mini Blog
                </div>
                <ul>
                    <li>
                        <a href="#">Bio</a>
                    </li>
                    <li>
                        <a href="#">Infos</a>
                    </li>
                    <li>
                        <a href="#">CV</a>
                    </li>
                    <li>
                        <a href="#">Réseaux Sociaux</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;