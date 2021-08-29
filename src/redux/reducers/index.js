const { GET_NAME, GET_USER, LOADING } = require("../actions")

const INITIAL_STATE = { name: '', user: {}, isLoading: false }

function reducerProfile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_NAME:
      return {
        ...state,
        name: action.name,
      }
    case GET_USER:
      return {
        ...state,
        user: action.user,
        isLoading: false,
      }
    case LOADING:
      return {
        ...state,
        isLoading: true,
      }
    default:
      return state
  }
}

export default reducerProfile;
