import {axiosInstance} from 'plugins/axios'

const listar = ({ commit }, pesquisa) => {
  axiosInstance.get(`/pokemon/${pesquisa}/`)
    .then((res) => {
      commit('SET_POKEMON', res.data)
      // this.pokemons = res.data.results
      console.log(res.data)
    })
    .catch((err) => {
      console.error(err.response)
    })
}

export {
  listar
}
