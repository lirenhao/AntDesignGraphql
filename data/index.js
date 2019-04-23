import path from 'path'
import jsonfile from 'jsonfile'
import shortid from 'shortid'
import moment from 'moment'

const dbFile = path.join(__dirname, 'db.json')

export const queryList = (type, query = {}) => {
  let result = jsonfile.readFile(dbFile)
    .then(db => db[type] || {})
    .then(data => Object.keys(data).map(key => data[key]))
  Object.keys(query).forEach(key => {
    result = result.then(list => list.filter(item => item[key] === query[key]))
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
  await jsonfile.writeFile(dbFile, db, { spaces: 2 })
  return value
}

export const insetUnion = async (type, id, record) => {
  const db = await jsonfile.readFile(dbFile)
  const data = db[type]
  data[id] = {
    ...record,
    lastUpdatedStamp: moment().format('YYYY-MM-DD HH:mm:ss'),
    createdStamp: moment().format('YYYY-MM-DD HH:mm:ss'),
    version: 0,
  }
  await jsonfile.writeFile(dbFile, db, { spaces: 2 })
  return data[id]
}

export const updateById = async (type, id, record) => {
  const db = await jsonfile.readFile(dbFile)
  const data = db[type]
  const value = data[id]
  data[id] = {
    ...value,
    ...record,
    lastUpdatedStamp: moment().format('YYYY-MM-DD HH:mm:ss'),
  }
  await jsonfile.writeFile(dbFile, db, { spaces: 2 })
  return data[id]
}

export const  deleteById = async (type, id) => {
  try {
    const db = await jsonfile.readFile(dbFile)
    delete db[type][id]
    await jsonfile.writeFile(dbFile, db, { spaces: 2 })
  } catch (e) {
    return false
  }
  return true
}