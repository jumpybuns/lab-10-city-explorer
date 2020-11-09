require('dotenv').config();

const express = require('express');
const cors = require('cors');
const request = require('superagent');
const app = 3000;

app.use(cors());

app.get('/', async (req, res) => {
    const URL = ''

    const response = await request.get(URL);
    res.json(response.body);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});