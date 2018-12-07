// importar metodo de redux
import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  store.dispatch({
    // siempre deberá ser e ir un type es tipo de acción como desayunar correr etc 
    type: 'ADD_SONG',
    // payload o como se quiera definir
    payload: {
      title,
    }
  })
}
//lista objetos, variablesmapas etc
const initialState = [
  {
    "title": "Kurenai",
  },
  {
    "title": "Imagine",
  },
  {
    "title": "Whit out you",
  }
]
const store = createStore(
  // Lo que se pasa en un store 3 cosas//
  //1. reducer = funcion pura
  (state) => state,
  // 2.Estado inicial puede ser el modelado de mis datos inicial initialstate = variable
  initialState,
  // 3.Enhancer = conexion con otras herramienta ejem webtools de redux
  // cod segun este repo https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
// de redux.html
const $container = document.getElementById('playlist');
// constante de estado store.metodo getState obtener la lista de informacion
const playlist = store.getState();
// Imprimir la iteracion de los datos
playlist.forEach((item) => {
  // crear etiqueta
  const template = document.createElement('p');
  // textContent es una propiedad recibira el title de initialState
  template.textContent = item.title;
  // appenChild añadir nuevos hijos html
  $container.appendChild(template);
})
// Mostar en consola los datos
console.log(store.getState())
