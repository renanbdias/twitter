var express = require('express');
var router = express.Router();
const realm = require("@models/db");

/* GET users listing. */
router.get('/', function(req, res, next) {
  realm.then(realm => {
    const users = Array.from(realm.objects('User'));
    res.status(200).json(users);
  })
});

router.post('/', function(request, response, next) {

  const name = request.body.name;
  const email = request.body.email;

  realm.then(realm => {
    realm.write(() => {

      const id = realm.objects('User').length + 1;
      const newUser = realm.create('User', { id: id, name: name, email: email });
      response.status(200).json(newUser);
    });
  });
});

module.exports = router;
