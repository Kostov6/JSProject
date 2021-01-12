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
            text: "7 elements test",
            value: "[8, 2, 3, 1, 1, 342, 5]"
        }
    ]
    return tests;
}

function getDescrByAlg(alg) {
    let descr = {
        alg_name: "Bubble sort",
        alg_img: "images/bubble_sort.png",
        alg_text: "Due to its simplicity, bubble sort is often used to introduce the concept of a sorting algorithm. In computer graphics it is popular for its capability to detect a very small error(like swap of just two elements) in almost - sorted arrays and fix it with just linear complexity(2n).",
        alg_input: " A array of integers in the format like: [3, 7, 1, 0, ...]",
        alg_output: "A array of sorted integers in the format like: [0, 1, 3, 7, ...]",
        alg_T: "O(n^2)",
        alg_M: "O(n)"
    }

    let descr2 = {
        alg_name: "Selection sort",
        alg_img: "images/selection_sort.png",
        alg_text: "The selection sort algorithm sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning. The algorithm maintains two subarrays - the sorted and unsorted subarray. In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray. The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation.",
        alg_input: " A array of integers in the format like: [3, 7, 1, 0, ...]",
        alg_output: "A array of sorted integers in the format like: [0, 1, 3, 7, ...]",
        alg_T: "O(n^2)",
        alg_M: "O(n)"
    }

    return descr;
}

app.get('/:alg/tests', (req, res) => {
    let alg = req.params['alg'];

    let response = getTestsByAlg(alg);
    res.send(response);
})

app.get('/:alg/description', (req, res) => {
    let alg = req.params['alg'];

    let response = getDescrByAlg(alg);
    res.send(response);
})