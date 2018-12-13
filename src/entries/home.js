import React from 'react';
import { render } from 'react-dom';
import HomePage from '../pages/containers/homepage';
// import Playlist from './src/playlist/components/playlist';
// import data from '../api.json';
// import data from '../schemas/index';
// componente que permite la conexion de mi store con la ui (conexion datos)
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducer from '../reducers/data';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
// console.log(normalizedData);
// console.log(data);
/****REDUX ***************************************************************/
// inicializar estado
// const initialState = {
//   // datos de la api
//   data: {
//     // ...descomponer es decir obtener todos los datos que hay dentro de data
//     // ...data,
//     // entities de los datos normalizados elementos de busqueda
//     entities: data.entities,
//     categories: data.result.categories,
//   },
//   search: [],
// }
// crear el store con sus tres parametros
const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());
/** **********************************************************************/

const homeContainer = document.getElementById('home-container')
// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
// render( <HomePage data={data}/>, homeContainer);
render(
  // Provider componente de alto nivel
  <Provider store={store}>
    <HomePage />
  </Provider>
, homeContainer);