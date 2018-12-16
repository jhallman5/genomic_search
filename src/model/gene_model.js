const { selectFullGene, selectPossibleGeneNames } = require('./db/queries')

const { Pool, Client } = require('pg')

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
})
client.connect()

const getFullGene = (gene) => {
  client.query("SELECT * FROM gene_table WHERE gene_name='ENG' LIMIT 1;", (err, res) => {
    console.log(err, res)
    client.end()
  })
  // return new Promise((resolve, reject) => {
  //   const geneList = selectFullGene(gene).filter(x => x.length > 1)
  //   resolve({'status': 'Success', 'geneList': geneList})
  // })
}

// const getFullGene = (gene) => {
//   return new Promise((resolve, reject) => {
//     const geneList = selectFullGene(gene).filter(x => x.length > 1)
//     resolve({'status': 'Success', 'geneList': geneList})
//   })
// }

const getPossibleGeneNames = (input) => {
  return new Promise((resolve, reject) => {
    const possibleGeneNames = []
    selectPossibleGeneNames(input)
      .filter(x => x.length > 0)
      .filter(x => x != 'Gene')
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
