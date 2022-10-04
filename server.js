const express = require('express');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type
`);

const app = express();

app.listen(3000, () => {
  console.log('Running GraphQL server... ');
});
