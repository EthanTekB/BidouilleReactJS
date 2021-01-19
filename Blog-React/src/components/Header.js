import React from 'react';
import logo from '../img/epitech-logo-blanc.png';
import {Link} from 'react-scroll'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <nav>
                    <img className="logo" src={logo} />
                    <br />
                    <div className="name">
                        Ethan's Mini Blog
                </div>
                    <ul>
                        <li>
                            <Link activeClass="active" to="biographie" smooth={true}>
                                <a href="#">Bio</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="PersonalInfos" smooth={true}>
                                <a href="#">Infos</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="CV" smooth={true}>
                                <a href="#">CV</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="Links" smooth={true}>
                                <a href="#">Réseaux Sociaux</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}