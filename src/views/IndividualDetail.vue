<template>
  <div class="p-4">
    <router-link
      :to="getBackLink()"
      class="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Kembali ke Daftar {{ formatTipe(tipeTokoh) }}
    </router-link>

    <div v-if="loading">Memuat data individu...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <h1 class="text-3xl font-bold mb-4">{{ formatName(namaTokoh) }}</h1>

      <div class="mb-4">
        <img
          v-if="gambarUrl"
          :src="gambarUrl"
          :alt="`Gambar dari ${formatName(namaTokoh)}`"
          class="tokoh-image mb-2"
        />
        <p v-else class="text-gray-500 italic">Maaf, saat ini gambar belum tersedia</p>
      </div>

      <div class="mb-4">
        <h2 class="text-xl font-semibold">Golongan</h2>
        <p>{{ formatTipe(tipeTokoh) || 'Tidak diketahui' }}</p>
      </div>

      <div v-if="objectProperties.length" class="mb-4">
        <h2 class="text-xl font-semibold">Atribut dan Relasi:</h2>
        <ul class="list-disc ml-5">
          <li v-for="(obj, index) in objectProperties" :key="index">
            <strong>{{ formatProperty(obj.property) }}:</strong>
            <router-link
              v-if="obj.isIndividual"
              :to="`/detail/${obj.value}`"
              class="text-blue-600 hover:underline"
            >
              {{ formatName(obj.value) }}
            </router-link>
            <span v-else>{{ obj.value }}</span>
          </li>
        </ul>
      </div>

      <div v-if="dataProperties.length" class="mb-4">
        <h2 class="text-xl font-semibold">Detail Tambahan:</h2>
        <ul class="list-disc ml-5">
          <li v-for="(data, index) in dataProperties" :key="index">
            <strong>{{ formatProperty(data.property) }}:</strong> {{ data.value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndividualDetail',
  data() {
    return {
      namaTokoh: '',
      tipeTokoh: '',
      objectProperties: [],
      dataProperties: [],
      gambarUrl: '',
      loading: true,
      error: null
    }
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    '$route.params.nama': function () {
      this.fetchData()
    }
  },
  methods: {
    async fetchData() {
      this.loading = true
      this.error = null
      this.namaTokoh = decodeURIComponent(this.$route.params.nama)

      this.tipeTokoh = ''
      this.objectProperties = []
      this.dataProperties = []

      const endpoint = 'http://localhost:3030/wayangpurwa/sparql'

      try {
        const tipeQuery = `
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX wp: <http://ukdw.ac.id/ontologi/wayangpurwa#>
          SELECT ?tipe WHERE {
            wp:${decodeURIComponent(this.namaTokoh)} rdf:type ?tipe .
            FILTER(?tipe != owl:NamedIndividual)
          }
        `
        const tipeRes = await axios.get(endpoint, {
          params: { query: tipeQuery, format: 'json' }
        })
        const tipeBindings = tipeRes.data.results.bindings
        if (tipeBindings.length) {
          this.tipeTokoh = tipeBindings[0].tipe.value.split('#').pop()
        }

        const propQuery = `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX wp: <http://ukdw.ac.id/ontologi/wayangpurwa#>
          SELECT DISTINCT ?property ?value WHERE {
            wp:${this.namaTokoh} ?property ?value .
            FILTER(?property != rdf:type)
          }
        `
        const propRes = await axios.get(endpoint, {
          params: { query: propQuery, format: 'json' }
        })
        const propBindings = propRes.data.results.bindings

        const objectProps = []
        const dataProps = []

        propBindings.forEach(b => {
          const propName = b.property.value.split('#').pop()
          const val = b.value.type === 'uri'
            ? b.value.value.split('#').pop()
            : b.value.value

          if (b.value.type === 'uri') {
            objectProps.push({ property: propName, value: val, isIndividual: true })
          } else {
            dataProps.push({ property: propName, value: val })
          }
        })

        this.objectProperties = objectProps
        this.dataProperties = dataProps

        this.gambarUrl = this.getGambarUrl(this.namaTokoh)
      } catch (err) {
        this.error = 'Gagal memuat detail individu.'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    getGambarUrl(nama) {
      try {
        return require(`@/assets/wayang/${nama}.jpg`)
      } catch (e) {
        console.warn(`Gambar untuk ${nama} tidak ditemukan.`)
        return null
      }
    },
    formatName(name) {
      return name
        .split('_')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    },
    formatTipe(tipe) {
      return tipe.replace(/([a-z])([A-Z])/g, '$1 $2')
    },
    formatProperty(prop) {
      return prop
        .replace(/^has/, '')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/^./, c => c.toUpperCase())
    },
    getBackLink() {
      const tipe = this.tipeTokoh.toLowerCase()
      if (tipe.includes('senjata') || tipe.includes('pusaka')) {
        return '/pusaka'
      } else if (tipe.includes('kesaktian')) {
        return '/kesaktian'
      } else if (
        ['kahyangan', 'kerajaan', 'kerajaanmanusia', 'kerajaandewa', 'kerajaankera', 'kerajaanmakhlukhalus', 
        'kerajaanraksasa', 'kerajaansiluman','pertapaan', 'laut', 'sungai', 'keputren', 'kesatriyan', 'padhukuhan']
          .includes(tipe)
      ) {
        return '/tempat-asal'
      } else {
        return '/tokoh'
      }
    }
  }
}
</script>

<style scoped>
.p-4 {
  padding: 32px;
}

.tokoh-image {
  width: 100%;
  max-width: 256px;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}
</style>
