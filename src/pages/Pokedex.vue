<template>
  <q-page class="q-pa-md">
    <!-- <div class="row  fixed-center">
      <div class="col-12">
        <q-input v-model="pesquisa" float-label="Digite o nome ou numero do pokemon"
          placeholder="Ex: pikachu" />
          <q-btn label="teste" class="full-width q-mt-lg" color="primary" @click="consultaPokemon()" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2 col-xs-6 col-md-4" v-for="(poke, index) in pokemons" :key="index" @click="teste(index)">
          <q-card >
            <q-card-media>
              <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`" class="responsive"  alt="">
            </q-card-media>
            <q-card-title>
              {{poke.name}}
            </q-card-title>
            <q-card-separator />
          </q-card>
      </div>
    </div> -->
    <pk-modal-pokedex></pk-modal-pokedex>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PkModalPokedex from 'components/Pk-modal-pokedex'
export default {
  name: 'Pokedex',
  components: {
    PkModalPokedex
  },
  data () {
    return {
      // pokemons: [],
      pesquisa: ''
    }
  },
  computed: {
    ...mapState('pokemon', ['pokemons'])
  },
  mounted () {
  },
  methods: {
    ...mapActions('pokemon', ['listar']),
    consultaPokemon () {
      this.listar(this.pesquisa)
      // this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pesquisa}/`)
      //   .then((res) => {
      //     this.pokemons = res.data.results
      //     console.log(res.data)
      //   })
      //   .catch(() => {

      //   })
    }
  }
}
</script>

<style>
</style>
