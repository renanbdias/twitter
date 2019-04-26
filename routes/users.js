var express = require('express');
var router = express.Router();
const realm = require("@models/db");

/* GET Users */
router.get('/', function(req, res, next) {
  realm.then(realm => {
    const users = Array.from(realm.objects('User'));
    res.status(200).json(users);
  })
});

/* POST Create a user */
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

/* POST User by id */
router.get('/:id', function(request, response, next) {

  const id = request.params.id;

  realm.then(realm => {
    const user = realm.objects('User').filtered("id = " + id)[0];
    response.status(200).json(user);
  });
});

/* GET user's tweets */
router.get('/:userId/tweets', function(request, response, text) {
  const userId = request.params.userId;

  realm.then(realm => {
    const user = realm.objects('User').filtered("id = " + userId)[0];

    if(user != null) {
      const tweets = Array.from(user.tweets)
      response.status(200).json(tweets);
    } else {
      response.status(404).json({error: "User not found"});
    }
  });
});

module.exports = router;
