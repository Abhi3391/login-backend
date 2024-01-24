const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  try {
    // Collect login credentials from the request body
    const { username, password } = req.body;

    // Example: Send credentials to an external API using Axios
    const apiUrl = 'https://example.com/login';
    const response = await axios.post(apiUrl, {
      username,
      password,
    });

    // Forward the response from the external API to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
