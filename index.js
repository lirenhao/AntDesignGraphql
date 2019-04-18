import express from 'express'
import graphqlHTTP from 'express-graphql'
import { mergeSchemas } from 'graphql-tools'
import testSchema from './graphql/test'

const app = express()
const schema = mergeSchemas({ schemas: [ testSchema ] })

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(8001, () => {
  console.log('graphql start!')
})