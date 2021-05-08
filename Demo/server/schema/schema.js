const graphql = require('graphql');
const _ = require('loadsh');
const {GraphQLObjectType, GhaphQLString, GraphQLSchema} = graphql;


// dummy data
var books = [
    {name:'Complete reference to Java', genre:'Programming'},
    {name:'Three States',genre:'Love-Fiction'}
];

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=> ({
        id:{type: graphql.GhaphQLString},
        name: {type: graphql.GraphQLString},
        genre: {type: graphql.GraphQLString}
    }) 
    
}); 

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
          type: BookType,
          args: {id: {type:graphql.GraphQLString}},
          resolve (parent, args) {
                //code for data from db 
              return _.find(books, {id: args.id})
          }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});