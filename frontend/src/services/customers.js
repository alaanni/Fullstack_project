import axios from 'axios'
const baseUrl = '/api/customers'

//let token = null

/*const setToken = newToken => {
  token = `bearer ${newToken}`
}*/

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  /*const config = {
    headers: { Authorization: token }
  }*/

  const response = await axios.post(baseUrl, newObject)//, config)
  return response.data
}

const update = async customer => {
  const response = await axios.put(`${baseUrl}/${customer.id}`, customer)
  return response.data
}

const remove = async customer => {
  /*const config = {
    headers: { Authorization: token }
  }*/
  const response = await axios.delete(`${baseUrl}/${customer.id}`)//, config)
  return response.data
}

export default { getAll, create, update, remove } //setToken