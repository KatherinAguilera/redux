/*componente que se exportara a index*/
import React, { Component } from 'react';
// Importo media para ser utilizado
import Media from './media.js';
import './playlist.css';
// 1. Declaro Playlist
function Playlist(props) {
  // const playlist = props.data.categories[0].playlist
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
        })
      }
    </div>
  )
}
// 2. Exporto para se utilizada
export default Playlist;