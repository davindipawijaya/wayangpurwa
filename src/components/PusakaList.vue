<template>
  <div class="p-4">

    <router-link
      to="/"
      class="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Kembali ke Halaman Utama
    </router-link>

    <h1 class="text-2xl font-bold mb-4">Daftar Pusaka</h1>
    <div v-if="loading">Memuat...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ul class="ml-4 list-disc">
        <li v-for="item in pusakaList" :key="item">
          <router-link :to="`/detail/${item}`" class="text-blue-600 hover:underline">
            {{ formatNama(item) }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PusakaList',
  data() {
    return {
      pusakaList: [],
      loading: true,
      error: null
    }
  },
  methods: {
    formatNama(nama) {
      return nama
        .replace(/_/g, ' ')
        .split(' ')
        .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
        .join(' ')
    }
  },
  mounted() {
    const query = `
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX wp: <http://ukdw.ac.id/ontologi/wayangpurwa#>
      PREFIX wpo: <http://ontology/wayangpurwa#>

      SELECT ?individu WHERE {
        ?individu rdf:type wpo:Pusaka .
      }
    `

    axios.get('http://localhost:3030/wayangpurwa/sparql', {
      params: { query, format: 'json' }
    })
    .then(response => {
      const results = response.data.results.bindings
      this.pusakaList = results
        .map(r => r.individu.value.split(/[#/]/).pop())
        .sort((a, b) => a.localeCompare(b))
    })
    .catch(err => {
      this.error = 'Gagal memuat data pusaka.'
      console.error(err)
    })
    .finally(() => {
      this.loading = false
    })
  }
}
</script>

<style scoped>
.p-4 {
  padding: 32px;
}
</style>
