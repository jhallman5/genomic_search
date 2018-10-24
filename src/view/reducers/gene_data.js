const default_state = {
  geneData: []
}

export default function reducer(state = default_state, action) {
  console.log('IN REDUCER')
  switch (action.type){
    case 'FETCH_GENE_DATA_FULFILLED': {
      console.log('CORRECT', action.payload.geneList)
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
