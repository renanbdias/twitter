var express = require('express');
var router = express.Router();
const realm = require("@models/db");

/* GET Tweets */
router.get('/', function(request, response, next) {
  realm.then(realm => {
    const tweets = Array.from(realm.objects('Tweet'));
    response.status(200).json(tweets);
  });
});

/* POST Create a tweet */
router.post('/', function(request, response, next) {

  const text = request.body.text;
  const userId = request.body.userId;

  realm.then(realm => {
    const id = realm.objects('Tweet').length + 1;
    const user = realm.objects('User').filtered("id = " + userId)[0];

    if(user != null) {
      realm.write(() => {
        const newTweet = { id: id, text: text }
        user.tweets.push(newTweet);
        response.status(200).json(newTweet);
      });
    } else {
      response.status(404).json({error: "User not found"});
    }
  });
});

/* GET Tweet by id */
router.get('/:id', function(request, response, next) {

  const id = request.params.id;

  realm.then(realm => {
    const tweet = realm.objects('Tweet').filtered("id =" + id)[0];
    response.status(200).json(tweet);
  });
});

module.exports = router;
