<template>
  <div @click="dialog=true">
    <v-list-item-content>
      <v-list-item-title>{{ company.name }}</v-list-item-title>
      <v-list-item-subtitle>Products: {{ company.status.availableProducts }}</v-list-item-subtitle>
      <v-list-item-subtitle>Last check: {{ company.status.lastCheckDate }}</v-list-item-subtitle>
    </v-list-item-content>
    <v_card :dialog.sync="dialog" :company.sync="company"/>
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
    company:{type: Object}
  },
  // mounted: function () {
  //   console.log(this.company)
  // }
}
</script>
