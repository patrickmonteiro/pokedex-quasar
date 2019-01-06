<template>
  <q-page class="container">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <div class="row justify-center uppercase">
      <div class="col-xs-12 col-sm-12 col-md-8">
        <q-card class="q-ma-sm q-m">
          <q-card-media>
            <div v-if="pokemon.id" class="row items-center text-center" style="height: 20vh;">
              <div class="col">
                <img v-if="pokemon.sprites" :src="pokemon.sprites.front_default" width="150vh" />
              </div>
              <div class="col">
                  <img v-if="pokemon.sprites" :src="pokemon.sprites.back_default" width="150vh"/>
              </div>
            </div>
            <div v-else class="row items-center text-center" style="height: 50vh;">
              <div class="col">
                <img src="statics/POKEDEXQUASAR.png" width="240vh" />
              </div>
            </div>
          </q-card-media>
          <q-card-title v-if="pokemon.name" class="">
            {{ pokemon.name }}
          </q-card-title>
          <q-card-main v-if="pokemon.id">
            <q-list>
              <q-scroll-area style="height: 35vh">
                <q-collapsible icon="poll" label="Abilities">
                  <div  v-for="(abi, index) in pokemon.abilities" :key="index">
                    - {{abi.ability.name}}
                  </div>
                </q-collapsible>
                <q-collapsible icon="star" label="stats">
                  <div v-for="(stats, index) in pokemon.stats" :key="index" >
                    {{stats.base_stat}} {{stats.stat.name}}
                  </div>
                </q-collapsible>
              </q-scroll-area>
            </q-list>
          </q-card-main>
          <q-card-main v-else>
            Teste
          </q-card-main>
        </q-card>
        <div class="absolute-bottom q-ma-sm">
          <div class="q-py-md">
            <q-input v-model="pesquisa"
              inverted color="red-10" style="margin-top: 3%" float-label="Pesquise" />
          </div>
          <q-btn color="dark" class="full-width" size="lg" label="Pesquisar" icon="search"
            @click="consultaPokemon()" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Pokedex',
  data () {
    return {
      pesquisa: '',
      img: 0
    }
  },
  computed: {
    ...mapState('pokemon', ['pokemon'])
  },
  mounted () {
  },
  methods: {
    ...mapActions('pokemon', ['listar']),
    consultaPokemon () {
      this.listar(this.pesquisa)
        .then(() => {
          console.log('POKEMON', this.pokemon)
        })
    }
  }
}
</script>
