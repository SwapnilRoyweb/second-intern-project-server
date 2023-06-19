const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Onestop restuarent server is running');
})

app.listen(port, () => {
    console.log(`Onestop restuarent server is running on port: ${port}`);
})