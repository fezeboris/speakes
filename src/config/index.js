import axios from 'axios'

const api = axios.create({
  baseURL: 'https://server-speakers.herokuapp.com/speakers'
})

export default api
