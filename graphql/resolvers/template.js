import { queryList, queryById, insert, updateById, deleteById } from '../../data'

export default (type, resolver = {}, query = {}, mutation = {}) => ({
  ...resolver,
  Query: {
    [`${type}List`]: (_, param) => queryList(type, param),
    [`${type}ById`]: (_, { id }) => queryById(type, id),
    ...query,
  },
  Mutation: {
    [`${type}Insert`]:(_, { record }) => insert(type, record),
    [`${type}UpdateById`]: (_, { id, record }) => updateById(type, id, record),
    [`${type}DeleteById`]: (_, { id }) => deleteById(type, id),
    ...mutation,
  },
})