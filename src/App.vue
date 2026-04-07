<template>
  <div id="app">
    <nav>
      <router-link to="/about">About</router-link> |
      <router-link to="/quotes">Random Quotes</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>

    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}

nav {
  margin-bottom: 20px;
}

a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}

a.router-link-active {
  font-weight: bold;
}

/* NEW: Center the page content */
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a.router-link-active {
  font-weight: bold;
  color: #2c3e50;
}
</style>