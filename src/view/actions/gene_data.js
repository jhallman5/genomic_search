function fetchGeneData(geneName) {
  console.log('IN ACTION', geneName)
  return {
    type: 'FETCH_GENE_DATA',
    payload: new Promise((resolve, reject) => {
      fetch(`/fullGene/${geneName}`)
        .then(response => {
          console.log('----->', response)
          resolve(response.json())
        })
    })
  }
}

module.exports = {
  fetchGeneData
}
