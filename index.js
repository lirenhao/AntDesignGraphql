import express from 'express'
import graphqlHTTP from 'express-graphql'
import { mergeSchemas } from 'graphql-tools'
import graphql from './graphql'

const app = express()

app.use('/graphql', graphqlHTTP({ schema: graphql, graphiql: true }))

app.listen(8001, () => {
  console.log('graphql start!')
})