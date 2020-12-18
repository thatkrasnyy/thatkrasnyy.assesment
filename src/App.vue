<template>
  <v-app>
    <v-main>
      <v-container>
        <Company/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Company from './pages/Company.vue'

export default {
  name: 'App',
  components: {
    Company
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
