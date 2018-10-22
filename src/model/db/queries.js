const path = require('path')
const shell = require('shelljs')

const VARIENT_TSV = path.join(__dirname, './variant_results.tsv')

const selectFullGene = (gene) => {
  const geneList = shell.exec(`awk -v GENE=${gene} '{if($1==GENE) {print}}' ${VARIENT_TSV}`).stdout.split('\n')
  return geneList.map(x => x.split('\t'))
}

const selectPossibleGeneNames = (gene) => {
  return shell.exec(`cut -f1 ${VARIENT_TSV} | egrep ^${gene}`).stdout.split('\n')
}

modules.exports = {
  selectFullGene,
  selectPossibleGeneNames
}
