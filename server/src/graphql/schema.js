const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
    type Query {
        users: [User]
        user(id: Int!): User
    }

    type Mutation {
        updateUserData(id: Int!, name: String!, lastname: String!, mail: String!): User
        createUser(name: String!, lastname: String!, mail: String!): User
    }

    type User {
        id: Int,
        name: String,
        lastname: String,
        mail: String,
    }
`;


module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})