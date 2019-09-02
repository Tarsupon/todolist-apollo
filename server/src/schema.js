const Todos = require('./data/todos');


const _ = require('lodash');

let {
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema
} = require('graphql');

const TodoType = new GraphQLObjectType({
    name: "Todo",
    description: "Just a cuberpunk description",
    fields: () => ({
      id: {type: new GraphQLNonNull(GraphQLString)},
      taskName: {type: new GraphQLNonNull(GraphQLString)},
       })
  });

  const TodoQueryRootType = new GraphQLObjectType({
    name: 'TodoAppSchema',
    description: "Todo Application Schema Query Root",
    fields: () => ({
      todos: {
        type: new GraphQLList(TodoType),
        description: "List of all Todos",
        resolve: function() {
          return Todos
        }
      },
    })
  });

  const TodoAppSchema = new GraphQLSchema({
    query: TodoQueryRootType
});

module.exports = TodoAppSchema;