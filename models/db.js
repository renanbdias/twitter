const Realm = require('realm');
const User = require('@models/User');

const realm = Realm.open({schema: [User]});

module.exports = realm;
