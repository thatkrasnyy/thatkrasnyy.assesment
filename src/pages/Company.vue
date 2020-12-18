<template>
  <div class="company">
    Company<pre>
      {{ GET_COMPANIES }}
    </pre>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: 'Company',
  methods: {
    ...mapActions(["FETCH_COMPANIES"])
  },
  computed: mapGetters(["GET_COMPANIES"]),
  created() {
    this.FETCH_COMPANIES()
  }
}
</script>

<style scoped>
</style>
