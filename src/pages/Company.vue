<template>
  <div class="company">
    <v-card class="mx-auto" width="400">
      <v-card-title>Companies</v-card-title>
      <div v-for="(item, index) in companiesList" :key="index">
        <v-list-item dense>
          <item_avatar :avatar_name.sync="item.name"/>
          <item_content :company.sync="item"/>
        </v-list-item>
      </div>
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

