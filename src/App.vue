<template>
  <div id="app">
    <Autocomplete :items="countries"
      filterby="country"
      @change="onChange"
      title = "Choose country..."
      @selected="countrySelected"/>
  </div>
</template>

<script>
import countries from './assets/countries';
import Autocomplete from './components/Autocomplete'
export default {
  name: 'App',
  mounted() {
    this.countries = countries;
  },
  data() {
    return {
      countries: []
    };
  },
  methods: {
    countrySelected(country) {
    }
  },
  components: {
    Autocomplete
  }
}
</script>
<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:100vw;
}
</style>
