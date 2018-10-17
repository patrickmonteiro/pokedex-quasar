import axios from 'axios'

export const recuperarPokedex = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => {
        commit('INSERIR_POKEMON', res.data.results)
        resolve()
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// export default {
//   recuperarPokedex
// }
