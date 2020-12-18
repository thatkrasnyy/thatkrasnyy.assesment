<template>
  <v-list-item-avatar>
    <v-avatar color="indigo" size="60">
      <span class="white--text headline">{{avatar_name}}</span>
    </v-avatar>
  </v-list-item-avatar>
</template>
<script>
export default {
  name: 'list-item-avatar',
  props: ['avatar_name']
}
</script>
