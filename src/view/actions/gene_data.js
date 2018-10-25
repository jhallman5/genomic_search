function fetchGeneData(geneName) {
  return {
    type: 'FETCH_GENE_DATA',
    payload: new Promise((resolve, reject) => {
      fetch(`/fullGene/${geneName}`)
        .then(response => {
          resolve(response.json())
        })
    })
  }
}

module.exports = {
  fetchGeneData
}
