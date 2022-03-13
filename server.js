const express = require("express");

const app = express();
const port = 3030;

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});

const addtwonumbers = (n1, n2) => {
    return n1 + n2;
};

app.get('/addtwonumbers', (req, res) => {
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let sum = addtwonumbers(n1, n2);
    res.send(sum.toString());
});