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

const getFullGene = async (gene) => {
  const { rows } = await client.query(`SELECT * FROM gene_table WHERE gene_name='${gene}';`)
  return {'status': 'Success', 'geneList': rows}
  client.end()
}

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
