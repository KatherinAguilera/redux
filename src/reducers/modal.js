//reducer modal
import { fromJS } from 'immutable';
const initialState = fromJS({
// const initialState = {
  visibility: false,
  mediaId: null,
})
function modal(state = initialState, action) {
  //evaluar action // modal si esta abierto o cerrado
  switch(action.type) {
    case 'OPEN_MODAL':
      return state.merge({
      visibility: true,
      mediaId: action.payload.mediaId,
    })
    case 'CLOSE_MODAL':
      return state.set('visibility', false)
    default:
      return state
  }
}
export default modal;