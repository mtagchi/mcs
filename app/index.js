const { MongoClient } = require('mongodb');
const assert = require('assert');
const { config } = require('./config');

const url = `mongodb://${config.user}:${config.password}@${config.host}:${config.port}?dbName=test`;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

MongoClient.connect(url, option, (err, client) => {
  assert.equal(null, err);
  console.log('Connected to the server!');

  const db = client.db('test');
  const collection = db.collection('users');
  user = {
    name: 'John',
    age: 56
  };
  collection.insertOne(user, () => {
    console.log('User inserted!')
    client.close();
  });
  client.close();
})
