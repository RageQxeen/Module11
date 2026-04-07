<template>
  <div>
    <h1>Contact</h1>
    <p>Name: Alex Algiere</p>
    <p>Email: analgiere@my.waketech.edu</p>

    <GoBack />
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue'

export default {
  name: 'ContactPage',
  components: { GoBack }
}
</script>

<style>
p {
  margin: 10px 0;
}
</style>