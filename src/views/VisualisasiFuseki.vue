<!-- src/views/VisualisasiFuseki.vue -->
<template>
  <div class="content">
    <h2>Visualisasi Ontologi Wayang - Generate Fuseki</h2>
    <div ref="graph" style="height: 800px; border: 1px solid #ccc;"></div>
  </div>
</template>

<script>
import { Network } from 'vis-network/standalone';

export default {
  name: 'VisualisasiFuseki',
  data() {
    return {
      nodes: [],
      edges: [],
    };
  },
  async mounted() {
    await this.loadGraphData();
    this.drawGraph();
  },
  methods: {
    async loadGraphData() {
      const query = `
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX owl: <http://www.w3.org/2002/07/owl#>

        SELECT DISTINCT ?source ?sourceLabel ?target ?targetLabel ?predicate WHERE {
          {
            ?source ?predicate ?target .
            ?source a owl:Class .
            ?target a owl:Class .
            FILTER(?predicate IN (rdfs:subClassOf, owl:equivalentClass))
          }
          UNION {
            ?source rdfs:subClassOf [
              owl:onProperty ?predicate ;
              owl:someValuesFrom ?target
            ] .
            ?source a owl:Class .
            ?target a owl:Class .
          }
          UNION {
            ?predicate a owl:ObjectProperty ;
                       rdfs:domain ?source ;
                       rdfs:range ?target .
            ?source a owl:Class .
            ?target a owl:Class .
          }
          OPTIONAL { ?source rdfs:label ?sourceLabel }
          OPTIONAL { ?target rdfs:label ?targetLabel }
        }
      `;

      const response = await fetch('http://localhost:3030/wayangpurwa/sparql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/sparql-query',
          Accept: 'application/sparql-results+json',
        },
        body: query,
      });

      if (!response.ok) {
        console.error('SPARQL error:', await response.text());
        return;
      }

      const json = await response.json();
      const nodeMap = new Map();
      const edges = [];

      json.results.bindings.forEach(b => {
        if (b.source.type === 'bnode' || b.target.type === 'bnode') return;

        const src = b.source.value;
        const tgt = b.target.value;
        const srcLabel = b.sourceLabel?.value || src.split('#').pop();
        const tgtLabel = b.targetLabel?.value || tgt.split('#').pop();
        const randomPos = () => Math.floor(Math.random() * 800 - 400);

        if (!nodeMap.has(src)) {
          nodeMap.set(src, {
            id: src,
            label: srcLabel,
            color: srcLabel === 'Tokoh' ? '#e74c3c' : '#3498db',
            size: srcLabel === 'Tokoh' ? 30 : 20,
            ...(srcLabel === 'Tokoh'
              ? { x: 0, y: 0, fixed: { x: true, y: true } }
              : { x: randomPos(), y: randomPos() }),
          });
        }

        if (!nodeMap.has(tgt)) {
          nodeMap.set(tgt, {
            id: tgt,
            label: tgtLabel,
            color: tgtLabel === 'Tokoh' ? '#e74c3c' : '#3498db',
            size: tgtLabel === 'Tokoh' ? 30 : 20,
            ...(tgtLabel === 'Tokoh'
              ? { x: 0, y: 0, fixed: { x: true, y: true } }
              : { x: randomPos(), y: randomPos() }),
          });
        }

        edges.push({
          from: src,
          to: tgt,
          arrows: 'to',
          label: b.predicate.value.split('#').pop(),
        });
      });

      this.nodes = Array.from(nodeMap.values());
      this.edges = edges;
    },

    drawGraph() {
      const container = this.$refs.graph;
      const data = {
        nodes: this.nodes,
        edges: this.edges,
      };

      const options = {
        layout: { improvedLayout: true },
        nodes: {
          shape: 'dot',
          font: { size: 14 },
        },
        edges: {
          arrows: 'to',
          smooth: { type: 'dynamic', roundness: 0.3 },
          font: { align: 'top', size: 10 },
        },
        chosen: {
          edge: (values, id, selected, hovering) => {
            values.color = selected ? 'red' : hovering ? 'orange' : '#97C2FC';
            values.width = selected || hovering ? 2.5 : 1;
          },
        },
        physics: {
          enabled: true,
          solver: 'repulsion',
          repulsion: {
            centralGravity: 0.05,
            springLength: 250,
            springConstant: 0.04,
            nodeDistance: 250,
            damping: 0.25,
          },
          stabilization: {
            enabled: true,
            iterations: 3000,
            updateInterval: 100,
            fit: true,
          },
        },
      };

      const network = new Network(container, data, options);

      network.once('stabilizationIterationsDone', () => {
        network.fit();
      });
    },
  },
};
</script>

<style scoped>
.content {
  padding: 32px;
}

h2 {
  margin-bottom: 20px;
}
</style>
