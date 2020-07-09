import axios from 'axios'
const baseUrl = '/api/orders'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async order => {
  const response = await axios.put(`${baseUrl}/${order.id}`, order)
  return response.data
}

const remove = async order => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.delete(`${baseUrl}/${order.id}`, config)
  return response.data
}

export default { getAll, create, setToken, update, remove }