const SET_POKEMONS = (state, dados) => {
  state.pokemons = dados
}

const SET_POKEMON = (state, dados) => {
  state.pokemon = dados
  state.erro_busca = ''
}

const ERRO_BUSCA_POKEMON = (state) => {
  state.erro_busca = 'Pokemon não encontrado'
}

const LIMPA_BUSCA = (state) => {
  state.pokemon = {}
}

const SHOW_LOADING = (state) => {
  state.loading = true
}

const HIDE_LOADING = (state) => {
  state.loading = false
}

export {
  SET_POKEMONS,
  SET_POKEMON,
  ERRO_BUSCA_POKEMON,
  LIMPA_BUSCA,
  SHOW_LOADING,
  HIDE_LOADING
}
