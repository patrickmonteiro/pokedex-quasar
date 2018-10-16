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
export default {
  name: 'Pokedex',
  data () {
    return {
      pokemons: []
    }
  },
  mounted () {
    this.$axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => {
        this.pokemons = res.data.results
        console.log(res.data)
      })
      .catch(() => {

      })
  }
}
</script>

<style>
</style>
