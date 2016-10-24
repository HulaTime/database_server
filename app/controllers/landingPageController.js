var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function(req, res) {
	res.render('landingPage/index')
	res.end()
});

module.exports = router;