const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("client"));

const port = 3000;


app.listen(port, () => {
    console.log(`App listening at http://localhost:` + port);
})

function getTestsByAlg(alg) {
    let tests = [{
            text: "Single element test",
            value: "[8]"
        }, {
            text: "Two elements test",
            value: "[8 , 4]"
        }, {
            text: "1 2 3 Test",
            value: "[1, 2, 3]"
        },
        {
            text: "3 2 1 Test",
            value: "[3, 2, 1]"
        }, {
            text: "8 elements test",
            value: "[8, 2, 3, 1, 1, 12, 342, 5]"
        }
    ]
    return tests;
}

app.get('/:alg/tests', (req, res) => {
    let alg = req.params['alg'];

    let response = getTestsByAlg(alg);
    res.send(response);
})