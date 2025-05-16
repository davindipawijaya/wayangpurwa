<template>
  <div class="about-container">
    <h1>Tentang Kami</h1>

    <section class="section">
      <h2>📘 Deskripsi Proyek</h2>
      <p>
        Proyek ini merupakan pengembangan <strong>ontologi Wayang Purwa</strong> sebagai bagian dari repositori semantik berbasis web. Ontologi ini bertujuan untuk mengklasifikasikan dan menyusun informasi tokoh-tokoh wayang, relasi keluarganya, tempat asal, kesaktian, keahlian, dan atribut lainnya secara sistematis dan terstruktur.
      </p>
    </section>

    <section class="section">
      <h2>👤 Pembuat Ontologi</h2>
      <p>
        Ontologi ini dikembangkan oleh seorang mahasiswa sebagai bagian dari tugas akhir/Skripsi, dengan pendekatan metode <strong>Methontology</strong> dan implementasi menggunakan <strong>Protégé</strong> serta <strong>Apache Jena Fuseki</strong> untuk SPARQL endpoint.
      </p>
    </section>

    <section class="section">
      <h2>📚 Referensi Sumber Pengetahuan</h2>
      <ul>
        <li><em>Mengenal Wayang Kulit Purwa</em> – Muchyar Abi Tofani (2013)</li>
        <li><em>Anatomi Wayang Kulit Purwa</em> – Junaidi & Sukistono (2018)</li>
        <li><em>Mengenal Gambar Tokoh Wayang Purwa dan Keterangannya</em> – Purwadi (2013)</li>
      </ul>
    </section>

    <section class="section">
      <h2>🎨 Kredit Gambar Wayang</h2>
      <p>
        Gambar-gambar tokoh wayang yang digunakan dalam aplikasi ini bersumber dari buku referensi serta hasil ilustrasi publik yang tersedia di domain publik. Seluruh penggunaan gambar hanya untuk keperluan edukasi dan non-komersial.
      </p>
    </section>
  </div>
</template>

<script setup>
// Halaman statis, tidak memerlukan script
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  text-align: center;
  color: #4a148c;
  margin-bottom: 30px;
}

.section {
  margin-bottom: 30px;
}

h2 {
  color: #311b92;
  margin-bottom: 10px;
}

p, li {
  font-size: 16px;
  line-height: 1.6;
}
</style>
