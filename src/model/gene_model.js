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

const getPossibleGeneNames = async (input) => {
  const { rows } = await client.query(`SELECT DISTINCT gene_name FROM gene_table WHERE gene_name ILIKE '${input}%';`)
  return {'status': 'Success', 'geneNames': rows.map(x => x.gene_name)}
  client.end()
}

module.exports = {
  getFullGene,
  getPossibleGeneNames
}
