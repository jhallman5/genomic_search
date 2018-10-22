const { selectFullGene } = require('./db/queries')

const getFullGene = (gene) => {
  return new Promise((resolve, reject) => {
    const geneList = selectFullGene(gene)
    resolve({'status': 'Success', 'geneList': geneList})
  })
}

module.exports = {
  getFullGene
}
