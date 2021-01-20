const {
    Router
} = require('express');
const {
    createQueriesForCollection
} = require('../db/queries');

const queries = createQueriesForCollection("algorithms");

const router = Router();

router.get('/:algId', (req, res) => {
    let alg = req.params['algId'];

    queries.get({
        _id: alg
    }).then(results => {
        res.send(results[0]);
    })
})

module.exports = router;