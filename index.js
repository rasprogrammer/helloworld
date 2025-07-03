const express = require("express");

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

    return res.end("<h2 style='text-align:center'>Hello World</h2>!");
})

app.listen(PORT, () => console.log('server started!'));