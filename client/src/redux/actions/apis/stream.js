import axios from 'axios'

const streamApi = axios.create({ baseURL: process.env.REACT_APP_SERVER_ENDPOINT })

export default streamApi