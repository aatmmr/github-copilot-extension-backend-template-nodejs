const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from your Extension Backend!');
});

app.post('/agent', (req, res) => {
    // Your agent code starts here
});

app.listen(port, () => {
    console.log(`Extension backend is listening at http://localhost:${port}`);
});