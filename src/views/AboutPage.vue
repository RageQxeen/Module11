<template>
  <div>
    <h1>About</h1>
    <p>
      This Single Page Application is built using Vue.js and Vue Router. It demonstrates
      navigation between pages without reloading the browser.
    </p>

    <GoBack />
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue'

export default {
  name: 'AboutPage',
  components: {
    GoBack
  }
}
</script>

<style>
p {
  max-width: 600px;
  margin: 20px auto;
  line-height: 1.6;
}
</style>