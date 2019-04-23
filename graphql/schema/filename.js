import fs from 'fs'
import path from 'path'

export default (sys, reg = /Type/g) => {
  const readDir = fs.readdirSync(path.join(__dirname, sys))
  return readDir.filter(name => reg.test(name))
}