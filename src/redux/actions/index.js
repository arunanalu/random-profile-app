import fetchUser from "../../services/fetchUser"

export const GET_NAME = 'GET_NAME'

export const GET_USER = 'GET_USER'

export const LOADING = 'LOADING'

export const getName = (name) => ({ type: GET_NAME, name }) 

const getUser = (user) => ({ type: GET_USER, user })

export const loading = () => ({ type: LOADING })

export const getFetchUser = () => async (dispatch) => {
  dispatch(loading())
  try {
    const user = await fetchUser()
    dispatch(getUser(user))

  } catch (error) {
    console.error(error)
  }
}
