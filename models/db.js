const Realm = require('realm');
const User = require('@models/User');
const Tweet = require('@models/Tweet');

const realm = Realm.open({
  schema: [User, Tweet],
  schemaVersion: 1,
  migration: (oldRealm, newRealm) => {
    if(oldRealm.schemaVersion < 1) {
      // Migrate
    }
  }
});

module.exports = realm;
