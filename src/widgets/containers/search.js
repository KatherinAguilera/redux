import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import { searchEntities } from '../../actions/index';
class SearchContainer extends Component {
  // Estado por defecto en el buscador
  state = {
    value: 'X Japan'
  }
  //  evitar que recargue la pagina

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(searchEntities(this.input.value))
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
export default connect()(SearchContainer);