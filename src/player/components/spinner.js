import React from 'react';
import './spinner.css';
 function Spinner(props) {
  //  si no esta activo
  if (!props.active) return null
  return (
    <div className="Spinner">
      <span>Cargando...</span>
    </div>
  )
}
 export default Spinner