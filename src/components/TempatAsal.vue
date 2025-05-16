<template>
  <div class="p-4">
    <router-link
      to="/"
      class="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Kembali ke Halaman Utama
    </router-link>

    <h1 class="text-2xl font-bold mb-4">Daftar Tempat Asal</h1>
    <div v-if="loading">Memuat...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="(tempats, tipe) in grouped" :key="tipe" class="mb-6">
        <h2 class="text-xl font-semibold mb-2">{{ formatTipe(tipe) }}</h2>
        <ul class="ml-4 list-disc">
          <li v-for="tempat in tempats" :key="tempat">
            <!-- Menambahkan router-link untuk mengarahkan ke halaman detail -->
            <router-link :to="`/detail/${tempat}`" class="text-blue-600 hover:underline">
              {{ formatNama(tempat) }}
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
  name: 'TempatAsal',
  data() {
    return {
      tempatList: [],
      loading: true,
      error: null
    }
  },
  computed: {
    grouped() {
      return this.tempatList.reduce((acc, curr) => {
        if (!acc[curr.tipe]) acc[curr.tipe] = []
        acc[curr.tipe].push(curr.nama)
        return acc
      }, {})
    }
  },
  methods: {
    formatTipe(tipe) {
      return tipe.replace('wp:', '').replace(/([a-z])([A-Z])/g, '$1 $2')
    },
    formatNama(nama) {
      return nama
        .replace(/_/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }
  },
  mounted() {
    const query = `
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      SELECT ?tempat ?tipe WHERE {
        ?tempat rdf:type ?tipe .
        FILTER regex(str(?tipe), "Kerajaan|Keputren|Kesatriyan|Laut|Padhukuhan|Pertapaan|Sungai|Kahyangan")
      }
      ORDER BY ?tipe ?tempat
    `

    axios
      .get('http://localhost:3030/wayangpurwa/sparql', {
        params: { query, format: 'json' }
      })
      .then(response => {
        const results = response.data.results.bindings
        this.tempatList = results.map(r => ({
          nama: r.tempat.value.split('#').pop(),
          tipe: r.tipe.value.split('#').pop()
        }))
      })
      .catch(err => {
        this.error = 'Gagal memuat data tempat.'
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
