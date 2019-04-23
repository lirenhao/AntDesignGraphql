import fs from 'fs'
import path from 'path'

/*
const filename = require('../schema/filename')
console.log(filename.default(sys, new RegExp('')).map(name => `template(sys, '${name.replace('\.graphql', '')}', {})`))
 */

export default (sys, reg = /Type/g) => {
  const readDir = fs.readdirSync(path.join(__dirname, sys))
  return readDir.filter(name => reg.test(name))
}