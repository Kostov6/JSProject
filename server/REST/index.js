const algorithms = require("./algorithms")
const tests = require("./tests");

const {
    Router
} = require("express");

const router = Router();

router.use("/algorithms", algorithms);
router.use("/tests", tests);

module.exports = router;