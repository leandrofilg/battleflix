import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'
// import ButtonLink from '../Menu/Menu.css'
import './Menu.css'

function Menu() {
  return (
    <nav className="Menu">
        <a href="/">
            <img src={Logo} className="Logo" alt="BattleFlix Logo"></img>
        </a>
        <Button as="a" className="ButtonLink" href="/">
          Novo vídeo
        </Button>
    </nav>
  );
}

export default Menu;