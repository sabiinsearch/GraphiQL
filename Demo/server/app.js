const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require ('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  // schema of data
    schema,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log("now listening on port 4000")
});