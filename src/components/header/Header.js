import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import './Header.css';

class Header extends Component {
  render() {
    return (<header>
        <span id="facebook"><FontAwesomeIcon icon={faFacebook} /> facebook.</span>
        <span id="perfil"><FontAwesomeIcon icon={faUser} /> Meu Perfil</span>
      </header>)
  }
}

export default Header;