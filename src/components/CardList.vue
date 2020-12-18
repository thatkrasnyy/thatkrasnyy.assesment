<template>
  <div>
    <v-list-item dense>
      <v-list-item-avatar>
        <v-avatar color="indigo" size="36">
          <span class="white--text headline"></span>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title><a href="">{{ company.name }}</a></v-list-item-title>
        <v-list-item-subtitle>Products: {{ company.status.availableProducts }}</v-list-item-subtitle>
        <v-list-item-subtitle>Last check: {{ company.status.lastCheckDate }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>

export default {
  name: 'list',
  props: {
    company: {
      required: true
    }
  }
}
</script>
