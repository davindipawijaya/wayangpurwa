<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h1>Ontologi Wayang Purwa</h1>
      <nav class="nav-actions">
        <button @click="goHome">Halaman Utama</button>
        <button @click="goToVisualisasiFuseki">Visualisasi dari Fuseki</button>
        <button @click="goToTentangKami">Tentang Kami</button>
      </nav>
    </div>

    <div class="submenu">
      <h2>DAFTAR MENU</h2>
      <div class="menu-section">
        <h3>DATA INDIVIDU</h3>
        <ul>
          <li><a @click.prevent="navigateTo('Tokoh')">➤ Tokoh Wayang Purwa</a></li>
          <li><a @click.prevent="navigateTo('Tempat')">➤ Tempat Asal</a></li>
          <li><a @click.prevent="navigateTo('Pusaka')">➤ Pusaka</a></li>
          <li><a @click.prevent="navigateTo('Kesaktian')">➤ Kesaktian</a></li>
        </ul>
      </div>
      <div class="menu-section">
        <h3>VISUALISASI</h3>
        <ul>
          <li><a @click.prevent="goToVisualisasi">➤ Visualisasi Lokal</a></li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push({ name: 'Home' })
}

const goToVisualisasi = () => {
  router.push({ name: 'Visualisasi' })
}

const goToVisualisasiFuseki = () => {
  router.push({ name: 'VisualisasiFuseki' })
}

const goToTentangKami = () => {
  router.push({ name: 'TentangKami' })
}

const navigateTo = (kategori) => {
  const routeMap = {
    Tokoh: 'Tokoh',
    Tempat: 'TempatAsal',
    Pusaka: 'PusakaList',
    Kesaktian: 'KesaktianList'
  }
  const routeName = routeMap[kategori]
  if (routeName) {
    router.push({ name: routeName })
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f8f8f8;
  height: 100vh;
  padding: 20px;
  border-right: 2px solid #ddd;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: fixed;
}

.sidebar-header {
  margin-bottom: 20px;
}

.sidebar-header h1 {
  font-size: 20px;
  font-weight: bold;
  color: #4a148c;
  margin-bottom: 10px;
}

.nav-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  background-color: #4a148c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #2272bd;
}

.submenu {
  margin-top: 30px;
}

.submenu h2 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.menu-section {
  margin-bottom: 20px;
}

.menu-section h3 {
  font-size: 16px;
  margin-bottom: 5px;
  color: #4a148c;
}

.menu-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-section li {
  margin: 8px 0;
}

.menu-section a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
  cursor: pointer;
}

.menu-section a:hover {
  color: #4a148c;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
