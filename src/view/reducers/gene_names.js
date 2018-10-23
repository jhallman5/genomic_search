const default_state = {
  geneNames: []
}

export default function reducer(state = default_state, action) {
  switch (action.type){
    case 'FETCH_GENE_NAMES_FULFILLED': {
      return Object.assign({}, state, {
        geneNames: action.payload
      })
    }
    default: {
      return {
        state
      }
    }
  }
}
