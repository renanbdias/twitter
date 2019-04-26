const tweetSchema = {
  name: "Tweet",
  primaryKey: "id",
  properties: {
    id: { type: 'int', indexed: true },
    text: 'string',
  }
};

module.exports = tweetSchema;
