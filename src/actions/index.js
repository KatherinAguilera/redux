import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SEARCH_ENTITIES
} from '../actions-types/index';

// creadores de acciones
export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}
export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}
export function searchEntities(query) {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query,
    }
  }
}
