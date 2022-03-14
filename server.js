const express = require("express");

const app = express();
app.use(express.static(__dirname + '/public'));

const port = 3030;

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});

const addTwoNumbers = (n1, n2) => {
    return n1 + n2;
};

const subtractTwoNumbers = (n1, n2) => {
    return n1 - n2;
};

const multiplyTwoNumbers = (n1, n2) => {
    return n1 * n2;
};

const divideTwoNumbers = (n1, n2) => {
    return n1 / n2;
};

app.get('/addtwonumbers', (req, res) => {
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let sum = addTwoNumbers(n1, n2);
    res.send(sum.toString());
});

app.get('/subtracttwonumbers', (req, res) => {
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let sum = subtractTwoNumbers(n1, n2);
    res.send(sum.toString());
});

app.get('/multiplytwonumbers', (req, res) => {
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let sum = multiplyTwoNumbers(n1, n2);
    res.send(sum.toString());
});

app.get('/dividetwonumbers', (req, res) => {
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let sum = divideTwoNumbers(n1, n2);
    res.send(sum.toString());
});