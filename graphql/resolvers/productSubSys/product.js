import path from 'path'
import jsonfile from 'jsonfile'

const productFile = path.join(__dirname, '../../data/product.json')

module.exports = {
  Product: {
    primaryProductCategory: ({ primaryProductCategoryId }) =>
      jsonfile
        .readFile(productFile)
        .then(({ category }) => category[primaryProductCategoryId] || {}),
  },
}