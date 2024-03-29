import axios from 'axios'
const baseUrl = '/api/customers'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const update = async customer => {
  const response = await axios.put(`${baseUrl}/${customer.id}`, customer)
  return response.data
}

const remove = async customer => {
  const response = await axios.delete(`${baseUrl}/${customer.id}`)
  return response.data
}

export default { getAll, create, update, remove }