import React from 'react';
import logo from '../../imagens/logo.png';
import { Link } from 'react-router-dom';
import './menu.css';
import Button from '../Button';

function Menu({ to, text }){/*iniciar todo componente com letra maiuscula*/
    return (
        <nav className = 'Menu'>
            <Link to = "/">
                <img className = "Logo" src = {logo} alt = "logo miilacgflix"></img>
            </Link>

            <Button 
                as={Link}
                to={to}
                className="ButtonLink"
            >
                {text}
            </Button>
        </nav>
    );
}

export default Menu; /*para conseguir usar em outros lugares*/