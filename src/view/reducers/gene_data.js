const default_state = {
  geneData: []
}

export default function reducer(state = default_state, action) {
  switch (action.type){
    case 'FETCH_GENE_DATA_FULFILLED': {
      return Object.assign({}, state, {
        geneData: action.payload.geneList
      })
    }
    default: {
      return {
        state
      }
    }
  }
}
