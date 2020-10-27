import buildingService from '../services/buildingService'

const reducer = (state = [], action) => {

  switch(action.type) {
    case 'INIT_BUILDINGS':
      return action.data
    case 'NEW_BUILDING':
      return [...state, action.data]
    default:
      return state
  }
}

export const initBuildings = () => {
  return async dispatch => {
    const buildings = await buildingService.getAll()
    dispatch({
      type: 'INIT_BUILDINGS',
      data: buildings,
    })
  }
}

export const createBuilding = content => {
  return async dispatch => {
    const newBuilding = await buildingService.create(content)
    dispatch ({
      type: 'NEW_BUILDING',
      data: newBuilding,
    })
  }
}

export default reducer