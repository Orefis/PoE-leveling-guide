const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Ustawienie katalogu publicznego
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint dla ścieżki '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});