var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function(req, res) {
	res.render('landingPage/index')
});

module.exports = router;