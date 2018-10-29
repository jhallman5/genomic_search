const default_state = {
  geneData: [],
  loading: false,
}

export default function reducer(state = default_state, action) {
  switch (action.type){
    case 'FETCH_GENE_DATA_PENDING': {
      return Object.assign({}, state, {
        loading: true
      })
    }
    case 'FETCH_GENE_DATA_FULFILLED': {
      return Object.assign({}, state, {
        geneData: action.payload.geneList,
        loading: false
      })
    }
    default: {
      return Object.assign({}, state)
    }
  }
}
