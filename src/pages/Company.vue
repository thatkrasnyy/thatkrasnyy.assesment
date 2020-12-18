<template>
  <div class="company">
    <v-card class="mx-auto" width="400">
      <v-card-title>Companies</v-card-title>
      <v-list-item dense>
        <item_avatar :avatar_name.sync="companiesList.name"/>
        <item_content :company_name.sync="companiesList.name" :company_status.sync="companiesList.status"/>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import item_avatar from '../components/List/v-list-item-avatar';
import item_content from '../components/List/v-list-item-content';

export default {
  name: 'Company',
  components: {
    item_avatar,
    item_content
  },
  computed: {
    companiesList() {
      return this.$store.getters.GET_COMPANIES
    }
  },
  beforeCreate() {
    this.$store.dispatch('FETCH_COMPANIES');
  }
}
</script>

<style scoped>
</style>
