import {axiosInstance} from 'plugins/axios'

const listar = ({ commit }, pesquisa) => {
  axiosInstance.get(`/pokemon/${pesquisa}/`)
    .then((res) => {
      commit('SET_POKEMONS', res.data.results)
      // this.pokemons = res.data.results
      console.log(res.data)
    })
    .catch(() => {

    })
}

export {
  listar
}
