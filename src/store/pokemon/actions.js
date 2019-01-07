import {axiosInstance} from 'plugins/axios'

const listar = ({ commit }, pesquisa) => {
  commit('SHOW_LOADING')
  axiosInstance.get(`/pokemon/${pesquisa}/`)
    .then((res) => {
      setTimeout(() => {
        commit('SET_POKEMON', res.data)
        commit('HIDE_LOADING')
      }, 500)
      console.log(res.data)
    })
    .catch(() => {
      commit('LIMPA_BUSCA')
      commit('ERRO_BUSCA_POKEMON')
      commit('HIDE_LOADING')
    })
}

export {
  listar
}
