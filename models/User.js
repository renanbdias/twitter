const userSchema = {
  name: "User",
  primaryKey: "id",
  properties: {
    id: { type: 'int', indexed: true },
    name: 'string',
    email: 'string',
    createdAt: { type: 'date', default: new Date() }
  }
};

module.exports = userSchema;
