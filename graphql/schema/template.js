import path from 'path'
import gql from 'graphql-tag'
import { importSchema } from 'graphql-import'

export default (sys, type, { queryTypeDefs = '', mutationTypeDefs = '' }) => {
  const filed = type.split('').map((k, i) => i === 0 ? k.toUpperCase() : k).reduce((a, b) => a + b, '')
  const importedTypeDefs = importSchema(path.join(__dirname, sys, `${type}.graphql`))
  return gql`
${importedTypeDefs}
type Query {
  ${type}All: [${filed}]
  ${type}ById(id: String): ${filed}
  ${queryTypeDefs}
}
type Mutation{
  ${type}Insert(record: ${filed}Input): ${filed}
  ${type}UpdateById(id: String record: ${filed}Input): ${filed}
  ${type}DeleteById(id: String): Boolean
  ${mutationTypeDefs}
}
`
}