const express = require('express');
const app = express();
const PORT = 2000;

const cors = require('cors');
app.use(cors())

let colors = [
    "aqua",
    "black",
    "blue",
    "fuchsia",
    "gray",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "purple",
    "red",
    "silver",
    "teal",
    "white",
    "yellow"
];
app.get('/colors', (req, res) => {
    res.send(colors);
})

app.listen(PORT, () => {
    console.log(`Server is up and Running ${PORT}`);
})