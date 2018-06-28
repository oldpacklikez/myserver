import { GraphQLObjectType, GraphQLString } from 'graphql'

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    title: { type: GraphQLString },
    author: { type: GraphQLString },
  }),
})

export default BookType
