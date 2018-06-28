import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'
import _ from 'lodash'
import BookType from './typeDefs'

const books = [
  {
    id: '1',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: '2',
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
  {
    id: '3',
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
]

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return _.find(books, { id: args.id })
      },
    },
  },
})

export default new GraphQLSchema({ query: RootQuery })
