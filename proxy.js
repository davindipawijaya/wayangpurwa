// proxy.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 8081;

app.use(cors());

app.get("/proxy", async (req, res) => {
  const { url, query, format } = req.query;

  if (!url || !query) {
    return res.status(400).json({ error: "Missing 'url' or 'query' parameter" });
  }

  console.log("⏩ Query request diterima");
  console.log("➡️ URL:", url);
  console.log("📝 SPARQL Query:", query);

  try {
    const response = await axios.get(url, {
      params: {
        query,
        format: format || "json"
      },
      headers: {
        Accept: "application/sparql-results+json"
      }
    });

    console.log("✅ Respons berhasil dari DBpedia");
    console.log("📦 Data:", JSON.stringify(response.data, null, 2)); // log hasil JSON

    res.json(response.data);
  } catch (error) {
    console.error("❌ Proxy Error:", error.message);

    if (error.response) {
      console.error("🔻 Status:", error.response.status);
      console.error("🔻 Data:", error.response.data);
    }

    res.status(500).json({ error: "Proxy request failed" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server running at http://localhost:${PORT}`);
});
