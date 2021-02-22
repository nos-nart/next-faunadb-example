const faunadb = require('faunadb'),
  q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_KEY,
});

module.exports = {
  client,
  q
}
