const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
  type Query {
    products: [Product]
    orders: [Order]
  }

  type Product {
    id: ID!
    description: String!
    price: Float!
    reviews: [Review]
  }

  type Review {
    rating: Int!
    comment: String
  }

  type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]

  }

  type OrderItem {
    product: Product!
    quantity: Int!
  }
`);

const root = {
  description: 'Red Shoe',
  price: 42.12,
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, () => {
  console.log('Running GraphQL server... ');
});
