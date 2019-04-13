var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(request, response, next){
	response.status(200).send({ greetings: "Hello there" });
});

module.exports = router;
