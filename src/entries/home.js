import React from 'react';
import { render } from 'react-dom';
import HomePage from '../pages/containers/homepage';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render( <HomePage data={data}/>, homeContainer);
