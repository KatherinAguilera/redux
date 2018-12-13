// funcion pura define action
// function data(state, action) {
import schema from '../schemas/index.js';
const initialState = {
  entities: schema.entities,
  categories: schema.result.categories,
  search: [],
}
function data(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      // action.payload.query
      // llamara a los datos
      // const list = state.data.categories[2].playlist;
      // const results = list.filter((item) => {
      //   return item.author.includes(action.payload.query)
      // })
      // return {
      //   ...state,
      //   search: results
      // }
      // FILTRAR DATOS CON MAP SIN IMPORTAR MAYUS
      let results = [];
      if (action.payload.query){
        state.data.categories.map((item)=>{
          return  item.playlist.filter((item)=>{
          return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
          })
        })
      }
      return {
        ...state,
        search: results,
      }
    }
    default:
      return state
  }
}

export default data;