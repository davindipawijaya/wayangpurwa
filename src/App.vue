<template>
  <div id="app">
    <AppSidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: 'App',
  components: {
    AppSidebar
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Biar sidebar dan konten sejajar */
#app {
  display: flex;
}

/* Ini buat konten utama (router-view) */
.main-content {
  margin-left: 250px; /* sama kayak lebar sidebar */
  padding: 20px;
  width: calc(100% - 250px);
}

/* Tambahan: sidebar posisi fixed */
.sidebar {
  position: fixed;
  width: 250px;
  height: 100vh;
}
</style>
