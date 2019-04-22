import path from 'path'
import jsonfile from 'jsonfile'
import shortid from 'shortid'
import moment from 'moment'

const dbFile = path.join(__dirname, 'db.json')

export const queryList = (type, param = {}) => {
  let result = jsonfile.readFile(dbFile)
    .then(db => db[type] || {})
    .then(data => Object.keys(data).map(key => data[key]))
  Object.keys(param).forEach(key => {
    result = result.then(list => list.filter(item => item[key] === param[key]))
  })
  return result
}

export const queryById = (type, id) => jsonfile.readFile(dbFile)
  .then(db => db[type] || {}).then(data => data[id] || {})

export const insert = async (type, record) => {
  const key = shortid.generate()
  const value = {
    ...record,
    [`${type}Id`]: key,
    lastUpdatedStamp: moment().format('YYYY-MM-DD HH:mm:ss'),
    createdStamp: moment().format('YYYY-MM-DD HH:mm:ss'),
    version: 0,
  }
  const db = await jsonfile.readFile(dbFile)
  const data = db[type] || {}
  data[key] = value
  db[type] = data
  await jsonfile.writeFile(file, dataSource, { spaces: 2 })
  return value
}

export const insetUnion = (type, record) => {
  
}

export const updateById = (type, id, record) => {

}

export const  deleteById = (type, id) => {

}