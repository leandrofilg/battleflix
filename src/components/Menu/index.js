import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'
// import ButtonLink from '../Menu/Menu.css'
import './Menu.css'

function Menu() {
  return (
    <nav className="Menu">
        <Link to="/">
            <img src={Logo} className="Logo" alt="BattleFlix Logo"></img>
        </Link>
        <Button as={Link} className="ButtonLink" to="cadastro/video">
          Novo vídeo
        </Button>
    </nav>
  );
}

export default Menu;