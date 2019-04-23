import { mergeSchemas } from 'graphql-tools'
import infraSubSys from './infraSubSys'
import productSubSys from './productSubSys'

export default mergeSchemas({ schemas: [
  ...infraSubSys,
  ...productSubSys,
]})