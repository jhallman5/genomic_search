const { selectFullGene, selectPossibleGeneNames } = require('./db/queries')

const getFullGene = (gene) => {
  return new Promise((resolve, reject) => {
    const geneList = selectFullGene(gene)
    resolve({'status': 'Success', 'geneList': geneList})
  })
}

const getPossibleGeneNames = (input) => {
  return new Promise((resolve, reject) => {
    const possibleGeneNames = []
    selectPossibleGeneNames(input)
      .filter(x => x.length > 0)
      .map(x => {
        if(!possibleGeneNames.includes(x)){
          possibleGeneNames.push(x)
        }
      })
    resolve({'status': 'Success', 'geneNames': possibleGeneNames})
  })
}

module.exports = {
  getFullGene,
  getPossibleGeneNames
}
