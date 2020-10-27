import axios from 'axios'
const baseUrl = '/api/buildings'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const update = async object => {
  const response = await axios.put(`${baseUrl}/${object.id}`, object)
  return response.data
}

const remove = async object => {
  const response = await axios.delete(`${baseUrl}/${object.id}`)
  return response.data
}

export default { getAll, create, update, remove }