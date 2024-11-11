const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Selina!');
});

// Define a new route /api/data
app.get('/api/data', (req, res) => {
    const data = 'Hello from the Kionnali app backend! 🌻';
    res.send(data);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});