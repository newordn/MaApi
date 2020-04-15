const {GraphQLServer} = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Class = require('./resolvers/Class')
const Course = require('./resolvers/Course')
const {prisma} = require('./generated/prisma-client')
const {storeUpload} = require('./helpers/upload')
const {GraphQLUpload}= require('graphql-upload')
const {makeExecutableSchema} = require('graphql-tools')
const {typeDefs} = require('./schema.graphql')

const resolvers = {
    Query,
    Mutation,
    Upload: GraphQLUpload,
    User,
    Class,
    Course   
}
const schema = makeExecutableSchema({typeDefs,resolvers})
const server = new GraphQLServer({
    schema,
    context: request=>({...request,prisma,storeUpload})
})
server.start(()=>console.log("Ma Api is running on port http://localhost:4000"))