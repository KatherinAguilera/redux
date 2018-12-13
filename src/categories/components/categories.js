import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media'
import '../../playlist/components/media.css'


function Categories(props) {
  return (
    <div className="Categories">
    <Search />
    {
        props.search.map((item) => {
          return <Media {...item.toJS()} key={item.get('id')}/>
        })
      }
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.get('id')}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}
    {/* mostrar busqueda en la ui
    <div className="Media-found">
    {
      props.search.length > 0 &&
      <Category
          key='search'
          title='Resultados'
          // description={props.search.length}
          playlist={props.search}
          handleOpenModal={props.handleOpenModal}
        />
    }
    </div>
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
//   )
// } */}

export default Categories