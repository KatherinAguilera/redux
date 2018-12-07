import React from 'react';
import logo from '../../../images/logo.png';
import './related.css';

const profile= "Mi perfil"
 const Related = props => (
   <div className="Related">
      <img src={logo} />
      <ul>
        <li>{profile}</li>
        <li>Lista de videos</li>
        <li>Videos Favoritos</li>
      </ul>
    </div>
  )

 export default Related;