// Enviar datos del input al la consola*/
const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  //no recargar la pagina
  event.preventDefault();
  // tomar los datos del form FormData es una api del navegador
  //que recibira un elemento del DOM esto hara que guarde los datos del formulario
  const data = new FormData($form);
  // // data anterior.metodoget de FromData <'title'> mi name del input del form en este caso title')
  const title = data.get('title');
  console.log(title);
}
// //////////////////////////////////////////

// // Ejemplo con arrow function
// // Nota: cuando se declara una funcion como variable o como el const arrow function
// // primero se debe declarar esa variable de la funcion y luego llamarla
// const $form = document.getElementById('form');
// const handleSubmit = event => {
//   event.preventDefault();
//   const data = new FormData($form);
//   const title = data.get('title');
//   console.log(title);
// }

// $form.addEventListener('submit', handleSubmit);
