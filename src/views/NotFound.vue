<template>
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>

    <GoBack />
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue'

export default {
  name: 'NotFound',
  components: { GoBack }
}
</script>

<style>
p {
  margin: 10px 0;
}
</style>