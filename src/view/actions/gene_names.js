function fetchPossibleGeneNames(partialName) {
  return {
    type: 'FETCH_GENE_NAMES',
    payload: new Promise((resolve, reject) => {
      fetch(`/geneName/${partialName}`)
        .then(response => {
          resolve(response.json())
        })
    })
  }
}

module.exports = {
  fetchPossibleGeneNames
}
