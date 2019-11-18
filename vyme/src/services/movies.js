import axios from 'axios'
const baseUrl = '/api/movies'

const getTrending = () => {
  const request = axios.get(`${baseUrl}/trending`)
  return request.then(response => response.data.results)
}

export default { getTrending }