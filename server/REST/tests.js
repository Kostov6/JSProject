const {
    Router
} = require('express');
const {
    createQueriesForCollection
} = require('../db/queries');

const queries = createQueriesForCollection("tests");

const router = Router();

router.get('/:alg', (req, res) => {
    let alg = req.params['alg'];

    queries.get({
        algorithm: alg
    }).then(results => {
        res.send(results[0].tests);
    })
})

module.exports = router;