var express = require('express');
var app = express();
var router = express.Router();

router.get('/set', function(req, res) {
	query = { 
		key: req.query.key,
		value: req.query.value
	};

	memory = query;

	res.redirect('/');
});

module.exports = router;