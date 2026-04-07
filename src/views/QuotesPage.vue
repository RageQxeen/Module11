<template>
  <div class="quotes-page">
    <h1>Random Quotes</h1>

    <button @click="getQuote">Get Quote</button>

    <p v-if="loading">Loading quote...</p>
    <p v-else-if="quote">{{ quote }}</p>
    <p v-else>{{ message }}</p>

    <GoBack />
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue'

export default {
  name: 'QuotesPage',
  components: { GoBack },
  data() {
    return {
      quote: '',
      message: 'Click the button to load a random quote.',
      loading: false
    }
  },
  methods: {
    async getQuote() {
      this.loading = true
      this.quote = ''
      this.message = ''
      try {
        const response = await fetch('https://api.quotable.io/random')
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
        const data = await response.json()
        this.quote = `"${data.content}" — ${data.author}`
      } catch (error) {
        console.error('Fetch error:', error)
        this.message = 'Error fetching quote. Try again later.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>
.quotes-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

button {
  margin: 10px 0;
  padding: 8px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}

p {
  margin: 10px 0;
  max-width: 600px;
  line-height: 1.5;
}
</style>