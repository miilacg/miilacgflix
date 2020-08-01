import React from 'react';
import logo from '../../imagens/logo.png';
import './menu.css';
import ButtonLink from './componentes/ButtonLink';

function Menu(){/*iniciar todo componente com letra maiuscula*/
    return (
        <nav className = 'Menu'>
            <a href = "/">
                <img className = "Logo" src = {logo} alt = "logo miilacgflix"></img>
            </a>

            <ButtonLink href = "/" className = "ButtonLink">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu; /*para conseguir usar em outros lugares*/