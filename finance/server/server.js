const express = require('express');
const db = require('./database'); // Import database connection

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
//blah blah blah
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/stocks', (req, res) => {
    db.all('SELECT * FROM stocks', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    })
})