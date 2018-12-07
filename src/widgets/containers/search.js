import React, { Component } from 'react';
import Search from '../components/search';
 class SearchContainer extends Component {
   // Estado por defecto en el buscador
  state = {
    value: 'X Japan'
  }
  //  evitar que recargue la pagina

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit')
   }
   // funcion de acceder al elemento
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      // value: event.target.value.replace(' ', '-')
      // espacio al hacerla busqueda
      value: event.target.value.replace(' ', ' ')
    })
  }
  render() {
    return (
      <Search 
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}
 export default SearchContainer;