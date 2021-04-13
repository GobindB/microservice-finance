const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.send("Hellow World!"));

app.listen(port, () => console.log(`Example app listening on PORT: ${port}!`))
