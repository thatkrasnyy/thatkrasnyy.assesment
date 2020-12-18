<template>
  <div class="company">
    <v-card class="mx-auto" width="400">
      <v-card-title>Companies</v-card-title>
      <List v-bind:company="GET_COMPANIES"></List>
    </v-card>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import List from '../components/CardList';

export default {
  name: 'Company',
  components: {List},
  methods: {
    ...mapActions(["FETCH_COMPANIES"])
  },
  computed: mapGetters(["GET_COMPANIES"]),
  created() {
    this.FETCH_COMPANIES()
    console.log(this.GET_COMPANIES)
  }
}
</script>

<style scoped>
</style>
