import { mergeSchemas } from 'graphql-tools'
import infraSubSys from './infraSubSys'
import partySubSys from './partySubSys'
import productSubSys from './productSubSys'

export default mergeSchemas({ schemas: [
  ...infraSubSys,
  ...partySubSys,
  ...productSubSys,
]})