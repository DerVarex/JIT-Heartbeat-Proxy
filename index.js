const express = require('express');
const http = require('http');
const app = express();

// Port, den du in deiner JIT-App brauchst
const PORT = 7090;

// Heartbeat Route
app.get('/heartbeat', (req, res) => {
  res.json({ heartbeat: 'alive', port: PORT });
});

// Start des Servers
http.createServer(app).listen(PORT, () => {
  console.log(`JIT Heartbeat Proxy running on port ${PORT}`);
});
