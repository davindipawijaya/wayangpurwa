<template>
  <div class="home-content">
    <!-- Header / Hero -->
    <header class="bg-yellow-100 text-gray-900 py-10 px-6 text-center shadow-md rounded-b-3xl">
      <h1 class="text-4xl font-bold mb-2">Ontologi Wayang Purwa</h1>
      <p class="text-lg max-w-2xl mx-auto">
        Menyajikan informasi semantik mengenai tokoh, pusaka, kesaktian, dan tempat dalam dunia Wayang Purwa berbasis teknologi ontologi dan web semantik.
      </p>
    </header>

    <!-- Konten utama -->
    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4">📊 Ringkasan Data Ontologi</h2>

      <div v-if="loading">Memuat ringkasan data...</div>
      <div v-else-if="error" class="text-red-600 font-medium">{{ error }}</div>
      <div v-else class="space-y-2 mb-6">
        <p>Total Tokoh: <strong>{{ totalTokoh }}</strong></p>
        <p>Total Tempat Asal: <strong>{{ totalTempatAsal }}</strong></p>
        <p>Total Pusaka: <strong>{{ totalPusaka }}</strong></p>
        <p>Total Kesaktian: <strong>{{ totalKesaktian }}</strong></p>
      </div>

      <!-- Hasil dari DBpedia -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">
          🌐 Mengenal Apa Itu Wayang Kulit Purwa
          <button @click="showWayangInfo = !showWayangInfo"
            class="ml-2 px-2 py-1 text-sm bg-blue-200 text-blue-800 rounded hover:bg-blue-300 cursor-pointer">
            {{ showWayangInfo ? 'Tutup' : 'Tampilkan' }}
          </button>
        </h2>
        <div v-show="showWayangInfo">
          <div v-if="loadingDbpedia">Mengambil data dari DBpedia...</div>
          <div v-else-if="errorDbpedia" class="text-red-600 font-medium">{{ errorDbpedia }}</div>
          <ul v-else class="list-disc list-inside space-y-2">
            <li v-for="item in wayangDbpedia" :key="item.label">
              <strong>{{ item.label }}</strong> —
              <a :href="item.uri" class="text-blue-600 underline" target="_blank">{{ item.uri }}</a>
              <p class="text-sm text-gray-700 mt-1"><strong>Abstrak:</strong> {{ item.abstract }}</p>
              <p class="text-sm text-gray-700 mt-1"><strong>Komentar:</strong> {{ item.comment }}</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Cerita Mahabharata & Ramayana -->
      <div class="mt-10">
        <h2 class="text-2xl font-semibold mb-4">
          📖 Cerita Wayang Purwa: Mahabharata & Ramayana
          <button @click="showWayangStories = !showWayangStories"
            class="ml-2 px-2 py-1 text-sm bg-blue-200 text-blue-800 rounded hover:bg-blue-300 cursor-pointer">
            {{ showWayangStories ? 'Tutup' : 'Tampilkan' }}
          </button>
        </h2>
        <ul v-show="showWayangStories" class="list-disc list-inside space-y-4">
          <li v-for="story in storyDbpedia" :key="story.label">
            <strong>{{ story.label }}</strong> —
            <a :href="story.uri" class="text-blue-600 underline" target="_blank">{{ story.uri }}</a>
            <p class="text-sm text-gray-700 mt-1"><strong>Abstrak:</strong> {{ story.abstract }}</p>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeView',
  data() {
    return {
      totalTokoh: 0,
      totalPusaka: 0,
      totalKesaktian: 0,
      loading: true,
      error: null,
      wayangDbpedia: [],
      storyDbpedia: [],
      showWayangInfo: true,
      showWayangStories: true,
      loadingDbpedia: true,
      errorDbpedia: null
    }
  },
  async mounted() {
    await Promise.all([
      this.fetchLocalData(),
      this.fetchDbpediaData(),
      this.fetchWayangStories()
    ])
  },
  methods: {
    async fetchLocalData() {
      try {
        const endpoint = 'http://localhost:3030/wayangpurwa/sparql'
        const headers = { Accept: 'application/sparql-results+json' }

        const getCount = async (query) => {
          const response = await axios.get(endpoint, {
            params: { query, format: 'json' },
            headers
          })
          return response.data.results.bindings.length
        }

        const queryTokoh = `
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
        `

        const queryTempatAsal = `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          SELECT ?tempat ?tipe WHERE {
            ?tempat rdf:type ?tipe .
            FILTER regex(str(?tipe), "Kerajaan|Keputren|Kesatriyan|Laut|Padhukuhan|Pertapaan|Sungai|Kahyangan")
          }
          ORDER BY ?tipe ?tempat
        `

        const queryPusaka = `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX wpo: <http://ontology/wayangpurwa#>
          SELECT ?individu WHERE {
            ?individu rdf:type wpo:Pusaka .
          }
        `

        const queryKesaktian = `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX wpo: <http://ontology/wayangpurwa#>
          SELECT ?individu WHERE {
            ?individu rdf:type wpo:Kesaktian .
          }
        `

        this.totalTokoh = await getCount(queryTokoh)
        this.totalTempatAsal = await getCount(queryTempatAsal)
        this.totalPusaka = await getCount(queryPusaka)
        this.totalKesaktian = await getCount(queryKesaktian)
      } catch (err) {
        console.error(err)
        this.error = 'Gagal mengambil ringkasan data.'
      } finally {
        this.loading = false
      }
    },

    async fetchDbpediaData() {
      try {
        const proxy = 'http://localhost:8081/'
        const dbpediaEndpoint = 'https://dbpedia.org/sparql'
        const fullUrl = proxy + dbpediaEndpoint

        const queryID = `
          PREFIX dbo: <http://dbpedia.org/ontology/>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          SELECT ?abstract ?comment WHERE {
            <http://dbpedia.org/resource/Wayang_kulit> dbo:abstract ?abstract ;
                                                        rdfs:comment ?comment .
            FILTER (lang(?abstract) = "id" && lang(?comment) = "id")
          } LIMIT 1
        `

        const queryEN = `
          PREFIX dbo: <http://dbpedia.org/ontology/>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          SELECT ?abstract ?comment WHERE {
            <http://dbpedia.org/resource/Wayang_kulit> dbo:abstract ?abstract ;
                                                        rdfs:comment ?comment .
            FILTER (lang(?abstract) = "en" && lang(?comment) = "en")
          } LIMIT 1
        `

        const headers = { Accept: 'application/sparql-results+json' }

        let res = await axios.get(fullUrl, {
          params: { query: queryID, format: 'json' },
          headers
        })

        let result = res.data.results.bindings?.[0]

        if (!result) {
          res = await axios.get(fullUrl, {
            params: { query: queryEN, format: 'json' },
            headers
          })
          result = res.data.results.bindings?.[0]
        }

        this.wayangDbpedia = [{
          label: 'Wayang kulit',
          uri: 'http://dbpedia.org/resource/Wayang_kulit',
          abstract: result?.abstract?.value || 'Tidak ditemukan abstrak.',
          comment: result?.comment?.value || 'Tidak ditemukan komentar.'
        }]
      } catch (err) {
        console.error(err)
        this.errorDbpedia = 'Gagal mengambil data dari DBpedia.'
      } finally {
        this.loadingDbpedia = false
      }
    },

    async fetchWayangStories() {
      const proxy = 'http://localhost:8081/'
      const dbpediaEndpoint = 'https://dbpedia.org/sparql'
      const fullUrl = proxy + dbpediaEndpoint
      const headers = { Accept: 'application/sparql-results+json' }

      const stories = [
        { label: 'Mahabharata', uri: 'http://dbpedia.org/resource/Mahabharata' },
        { label: 'Ramayana', uri: 'http://dbpedia.org/resource/Ramayana' }
      ]

      for (const story of stories) {
        try {
          const query = `
            PREFIX dbo: <http://dbpedia.org/ontology/>
            SELECT ?abstract WHERE {
              <${story.uri}> dbo:abstract ?abstract .
              FILTER(lang(?abstract) = "en")
            } LIMIT 1
          `
          const res = await axios.get(fullUrl, {
            params: { query, format: 'json' },
            headers
          })
          const result = res.data.results.bindings?.[0]
          this.storyDbpedia.push({
            label: story.label,
            uri: story.uri,
            abstract: result?.abstract?.value || 'Tidak ditemukan abstrak.'
          })
        } catch (error) {
          console.error(`Gagal mengambil abstrak untuk ${story.label}`, error)
          this.storyDbpedia.push({
            label: story.label,
            uri: story.uri,
            abstract: 'Gagal mengambil data dari DBpedia.'
          })
        }
      }
    }

  }
}
</script>

<style scoped>
.home-content {
  padding: 32px;
}

button {
  cursor: pointer;
}
</style>
