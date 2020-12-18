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

<style></style>
