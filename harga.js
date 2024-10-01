const { error } = require("console");
const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/", (req, res) => {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    fetch (url)
    .then(response => response.json())
    .then (data => {
        res.send('
            ')
    })

});
