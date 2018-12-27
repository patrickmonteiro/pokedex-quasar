import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
