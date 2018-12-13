// Este es mi componente principal *(inteligente)
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
// conectar datos a los componentes
import { connect } from 'react-redux';
class HomePage extends Component {
  // setear un estado
  state= {
    modalVisible:false,
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }

  render() {
    return (
      // lo que se coloque aca lo redendeara mi home-layout.js
    <HandleError>
      <HomeLayout>
        <Related />
        <Categories
          categories={this.props.categories}
          handleOpenModal={this.handleOpenModal}
          // agregar propiedades
          search={this.props.search}
        />
        {
        this.state.modalVisible &&
        <ModalContainer>
          <Modal
            handleClick={this.handleCloseModal}
          >
            <VideoPlayer
              autoplay
              src={this.state.media.src}
              title={this.state.media.title}
            />
          </Modal>
        </ModalContainer>
        }
      </HomeLayout>
      </HandleError>
    )
  }
}
/***REDUX******/
function mapStateToProps(state, props) {
  // lista de id que tiene las categorias
  // const categories = state.data.categories.map((categoryId) => {
  //   return state.data.entities.categories[categoryId]
  const categories = state.get('data').get('categories').map((categoryId) => {
    // return state.get('data').get('entities').get('categories').get(categoryId)
    return state.get('data').get('entities').get('categories').get(categoryId.toString())
  })
  return {
    // categories: state.data.categories,
    categories: categories,
    // search: state.search
    // search: state.data.search
    search: state.get('data').get('search')
  }
}
export default connect(mapStateToProps)(HomePage)