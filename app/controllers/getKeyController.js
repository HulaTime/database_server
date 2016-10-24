var express = require('express');
var app = express();
var router = express.Router();

router.get('/get', function(req, res) {
	res.send(memory)
});

module.exports = router;