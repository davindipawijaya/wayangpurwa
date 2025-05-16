<template>
  <div class="p-4">

    <router-link
      to="/"
      class="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Kembali ke Halaman Utama
    </router-link>

    <h1 class="text-2xl font-bold mb-4">Daftar Tokoh Berdasarkan Golongan</h1>
    <div v-if="loading">Memuat data tokoh...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="group in orderedGrouped" :key="group.tipe" class="mb-6">
        <h2 class="text-xl font-semibold mb-2">{{ formatTipe(group.tipe) }}</h2>
        <ul class="ml-4 list-disc">
          <li v-for="tokoh in group.tokohList" :key="tokoh">
            <router-link :to="`/detail/${encodeURIComponent(tokoh)}`" class="text-blue-600 hover:underline">
              {{ formatName(tokoh) }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndividualList',
  data() {
    return {
      grouped: {},
      orderedGrouped: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    const query = `
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX wp: <http://ukdw.ac.id/ontologi/wayangpurwa#>
      PREFIX wpo: <http://ontology/wayangpurwa#>

      SELECT ?tokoh ?tipe WHERE {
        ?tokoh rdf:type ?tipe .
        FILTER(?tipe IN (
          wp:Dewa, wp:Bidadari, wp:Kera, wp:MakhlukHalus,
          wp:Manusia, wp:Raksasa, wp:Siluman,
          wpo:Dewa, wpo:Bidadari, wpo:Kera, wpo:MakhlukHalus,
          wpo:Manusia, wpo:Raksasa, wpo:Siluman
        ))
      }
      ORDER BY ?tipe ?tokoh
    `

    axios.get('http://localhost:3030/wayangpurwa/sparql', {
      params: {
        query,
        format: 'json'
      }
    })
    .then(response => {
      const results = response.data.results.bindings
      const grouped = {}

      results.forEach(r => {
        const tipeUri = r.tipe.value
        const tipe = tipeUri.split('#').pop()
        const tokoh = r.tokoh.value.split('#').pop()

        if (!grouped[tipe]) {
          grouped[tipe] = []
        }

        grouped[tipe].push(tokoh)
      })

      this.grouped = grouped

      // Urutan tampilan tipe
      const customOrder = ['Bidadari', 'Dewa', 'Kera', 'MakhlukHalus', 'Manusia', 'Raksasa', 'Siluman']

      this.orderedGrouped = customOrder
        .filter(tipe => grouped[tipe])
        .map(tipe => ({
          tipe,
          tokohList: grouped[tipe].sort((a, b) => a.localeCompare(b))
        }))
    })
    .catch(error => {
      this.error = 'Gagal mengambil data tokoh'
      console.error(error)
    })
    .finally(() => {
      this.loading = false
    })
  },
  methods: {
    formatName(name) {
      return name
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    },
    formatTipe(tipe) {
      return tipe.replace(/([a-z])([A-Z])/g, '$1 $2')
    }
  }
}
</script>

<style scoped>
.p-4 {
  padding: 32px;
}
</style>
