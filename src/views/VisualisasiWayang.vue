<template>
  <div class="visualisasi-page">
    <h2>Visualisasi Ontologi Wayang Purwa</h2>
    <div id="cy" class="network"></div>
    <div v-if="selectedNode" class="detail">
      <h3>Detail {{ selectedNode.label }}:</h3>
      <p><strong>Nama Class:</strong> {{ selectedNode.id }}</p>
      <p><strong>Group:</strong> {{ selectedNode.group || 'Tidak tersedia' }}</p>
      <p v-if="selectedNode.comment"><strong>Deskripsi:</strong> {{ selectedNode.comment }}</p>

      <div v-if="selectedNode.instances && selectedNode.instances.length">
        <strong>Individu:</strong>
        <ul>
          <li v-for="(ind, i) in selectedNode.instances" :key="i">{{ ind }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import cytoscape from 'cytoscape'
import { nodes, edges } from '@/data/ontologyClasses' // pastikan data lengkap

const selectedNode = ref(null)

onMounted(() => {
  const nodeIds = nodes.map(n => n.data.id)

  const filteredEdges = edges.filter(e =>
    nodeIds.includes(e.data.source) && nodeIds.includes(e.data.target)
  )

  const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: {
      nodes,
      edges: filteredEdges
    },
    style: [
      {
        selector: 'node',
        style: {
          'label': 'data(label)',
          'text-valign': 'center',
          'text-halign': 'center',
          'color': '#ffffff',
          'background-color': '#4f46e5',
          'font-size': 12,
          'text-wrap': 'wrap',
          'text-max-width': 80,
          'width': 100,
          'height': 50,
          'shape': 'roundrectangle'
        }
      },
      {
        selector: 'edge',
        style: {
          'label': 'data(label)',
          'width': 2,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'font-size': 10,
          'text-rotation': 'autorotate',
          'text-margin-y': -10
        }
      }
    ],
    layout: {
      name: 'cose',
      animate: true
    }
  })

  cy.on('tap', 'node', (evt) => {
    const node = evt.target.data()
    selectedNode.value = node
  })

  cy.on('tap', (evt) => {
    if (evt.target === cy) {
      selectedNode.value = null
    }
  })
})
</script>

<style scoped>
.visualisasi-page {
  padding: 20px;
  margin-left: 260px;
}

.network {
  height: 600px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

.detail {
  background: #f3e5f5;
  padding: 15px;
  border-radius: 8px;
}
</style>
