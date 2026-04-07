<template>
  <button @click="$router.back()">Go Back</button>
</template>

<script>
export default {
  name: 'GoBack'
}
</script>

<style>
button {
  margin-top: 20px;
  padding: 5px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #369870;
}
</style>