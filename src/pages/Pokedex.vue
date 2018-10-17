<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-lg-2 col-xs-6 col-md-4" v-for="(poke, index) in pokemons" :key="index">
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
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Pokedex',
  data () {
    return {
      pokemon: []
    }
  },
  mounted () {
    this.$q.loading.show()
    this.recuperarPokedex()
      .then((res) => {
        this.pokemon = this.pokemons.results
        this.$q.loading.hide()
      })
      .catch(() => {
        this.$q.loading.hide()
        this.$q.notify({
          message: `Ocorreu um erro`,
          color: 'negative',
          icon: 'warning',
          position: 'top'
        })
      })
  },
  computed: {
    ...mapState('pokedex', ['pokemons'])
  },
  methods: {
    ...mapActions('pokedex', ['recuperarPokedex'])
  }
}
</script>

<style>
</style>
