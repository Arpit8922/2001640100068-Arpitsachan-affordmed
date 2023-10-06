const express = require('express');
const axios = require('axios');
const app = express();
const port = 8008;

app.use(express.json());

app.get('/numbers', async (req, res) => {
  const { url } = req.query;
  
  if (!url || !Array.isArray(url)) {
    return res.status(400).json({ error: 'Invalid URL parameter' });
  }

  const results = [];

  try {
    for (const apiUrl of url) {
      const response = await axios.get(apiUrl, { timeout: 500 });
      if (response.status === 200 && Array.isArray(response.data.numbers)) {
        results.push(...response.data.numbers);
      }
    }


    const mergedNumbers = [...new Set(results)].sort((a, b) => a - b);

    res.json({ numbers: mergedNumbers });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Number Management Service listening at http://localhost:${port}`);
});
// App.js
