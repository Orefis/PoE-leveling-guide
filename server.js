const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const sqlite3 = require('sqlite3');

const dbPath = path.join(__dirname, 'db', 'database.db');
const db = new sqlite3.Database(dbPath);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/tasks', (req, res) => {
  db.all('SELECT id_task, task_name, task_desc, act FROM tasks', (error, rows) => {
    if (error) {
      console.error('Błąd podczas pobierania danych z bazy danych:', error);
      res.status(500).send('Wystąpił błąd serwera');
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);

  db.get('SELECT 1', (error, row) => {
    if (error) {
      console.error('Błąd podczas sprawdzania połączenia z bazą danych:', error);
    } else {
      console.log('Połączenie z bazą danych zostało pomyślnie ustanowione');
    }
  });
});
