import React from 'react';
import './modal.css';
 function Modal(props) {
   // los componenetes funcionales no deben manejar eventos sino sus propias propiedades
  return (
    <div className="Overlay">
      <div className="Modal">
        {props.children}
        <button className="Modal-close" onClick={props.handleClick}></button>
      </div>
    </div>
  )
}
 export default Modal;