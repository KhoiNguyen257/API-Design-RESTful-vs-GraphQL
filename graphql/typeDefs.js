const typeDefs = `#graphql
  type Author {
    id: ID!
    name: String!
    email: String
    bio: String
    books: [Book!]!
  }

  type Category {
    id: ID!
    name: String!
    description: String
    books: [Book!]!
  }

  type Book {
    id: ID!
    title: String!
    isbn: String
    publishYear: Int
    description: String
    author: Author!
    categories: [Category!]!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
    authors: [Author!]!
    categories: [Category!]!
  }
`;

module.exports = typeDefs;