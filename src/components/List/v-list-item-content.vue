<template>
  <div @click="dialog=true">
    <v-list-item-content>
      <v-list-item-title>{{ company_name }}</v-list-item-title>
      <v-list-item-subtitle>Products: {{ company_status.availableProducts }}</v-list-item-subtitle>
      <v-list-item-subtitle>Last check: {{ company_status.lastCheckDate }}</v-list-item-subtitle>
    </v-list-item-content>
    <v_card :dialog.sync="dialog"/>
  </div>
</template>
<script>
import v_card from './v-card'

export default {
  name: 'list-item-content',
  data: function () {
    return {
      dialog: false
    };
  },
  components: {v_card},
  props: {
    company_name: {required: true},
    company_status: {
      availableProducts: {},
      lastCheckDate: {},
    }
  }
}
</script>
