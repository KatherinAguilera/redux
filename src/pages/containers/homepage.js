// Este es mi componente principal *(inteligente)
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
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
          categories={this.props.data.categories}
          handleOpenModal={this.handleOpenModal}
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

export default HomePage